import nodemailer from 'nodemailer';
import userModel from "../models/user.model.js";
import responseHandler from "../handlers/response.handler.js";


const sendEmail = async (req, res, next) => {

  const { email } = req.body;
  const user = await userModel.findOne({ email }).select("email name");

  if (!user) {
    return responseHandler.error(res, "User not found with provided email");
  }

  const { name } = user;
  
  const resetPasswordLink = "https://example.com/reset-password";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        },
  });
  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: email,
    subject: "Reset Password Link",
    text:`Hello ${name},\n\nYou requested for reset password, kindly use this ${resetPasswordLink} to reset your password`,
  };
  try {
    await transporter.sendMail(mailOptions);
    next();
  } catch (error) {
    return responseHandler.error(res, "Failed to send email");
  }
};

export default sendEmail;
