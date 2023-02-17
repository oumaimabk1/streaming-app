import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import sendEmail from "../middlewares/sendEmail.middleware.js";

const signup = async (req, res) => {
  try {
    const { name, email, password, address, city, state, zip, cardName, cardNumber, expiry, cvv } = req.body;
    
    const checkUser = await userModel.findOne({ email });
    if (checkUser) return responseHandler.badrequest(res, "Email address already used");
    const user = new userModel();
    user.name = name;
    user.email = email;
    user.setPassword(password);
    user.address = address;
    user.city = city; 
    user.state = state;
    user.zip = zip;
    user.cardName = cardName;
    user.cardNumber = cardNumber;
    user.expiry =  expiry;
    user.cvv = cvv;

    await user.save();

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    res.send({
      token,
      ...user._doc,
      id: user.id
    })
  } catch (e) {
    res.send(e)
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("email password salt id name");

    if (!user) return responseHandler.badrequest(res, "User not exist");

    if (!user.validPassword(password)) return responseHandler.badrequest(res, "Wrong password");

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    user.password = undefined;
    user.salt = undefined;
    res.send({
      token,
      ...user._doc,
      id: user.id
    })

  } catch (e) {
    res.send(e)
  }
};

const updatePassword = async (req, res) => {
  try {
    const { newPassword, confirmNewPassword  } = req.body;

    // check that passwords match
    if (newPassword !== confirmNewPassword) {
      return responseHandler.badrequest(res, 'Passwords do not match');
    }

    const user = await userModel.findById(req.user.id).select("id salt");

    if (!user) return responseHandler.unauthorize(res);

    // Check if the email has been sent before allowing the user to update the password
    if (!user.emailSent) return responseHandler.badrequest(res, "Email not sent");

    user.setPassword(newPassword);

    await user.save();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getInfo = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);

    if (!user) return responseHandler.notfound(res);

    responseHandler.ok(res, user);
  } catch {
    responseHandler.error(res);
  }
};

export default {
  signup,
  signin,
  getInfo,
  updatePassword
};