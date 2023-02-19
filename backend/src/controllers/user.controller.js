import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import sendEmail from "../middlewares/sendEmail.middleware.js";


///////////////////////////////////////////SIGN UP ////////////////////////////////////////////////
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

///////////////////////////////////////////SIGN IN ////////////////////////////////////////////////

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

/////////////////////////////////////////// RESET PASSWORD with TOKEN ////////////////////////////////////////////////
/*
const resetPasswordLink = "https://example.com/reset-password";

const resetPasswordEmail= async (req, res) => {
  try {
    const {email} = req.body;

    const user = await userModel.findOne({ email }).select("email id");

    if (!user) {
      return responseHandler.badrequest(res, "The email is not registered with us");
    }

   const token = jsonwebtoken.sign(
     { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
   );

   await userModel.updateOne(
    { _id: user._id },
    { resetPasswordToken: token, resetPasswordExpires: Date.now() + 3600000 }
  );

  const sent = await sendEmail(email, token, resetPasswordLink);

  if (sent === "0") {
    return responseHandler.error(res, "Failed to send email");
  }

  return responseHandler.success(res, "The reset password link has been sent to your email address");
} catch (e) {
console.log(e);
return responseHandler.error(res, "Something goes wrong. Please try again");
}
};
*/


// no token 
const resetPasswordLink = "https://example.com/reset-password";

const resetPasswordEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email }).select("email");

    if (!user) {
      return responseHandler.badrequest(res, "The email is not registered with us");
    }

    const sent = await sendEmail(email, resetPasswordLink);
  
    if (sent === "0") {
      return responseHandler.error(res, "Failed to send email");
    }

    return responseHandler.success(res, "The reset password link has been sent to your email address");
  } catch (e) {
    console.log(e);
    return responseHandler.error(res, "Something goes wrong. Please try again");
  }
};



const updatePassword = async (req, res) => {
  try {
    const { email, newPassword, confirmNewPassword  } = req.body;

    // check that passwords match
    if (newPassword !== confirmNewPassword) {
      return responseHandler.badrequest(res, 'Passwords do not match');
    }

    const user = await userModel.findOne({ email }).select("email id salt");

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


export default {
  signup,
  signin,
  resetPasswordEmail,
  updatePassword
};


