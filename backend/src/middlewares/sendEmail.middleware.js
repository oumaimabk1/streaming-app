import nodemailer from 'nodemailer';
import userModel from "../models/user.model.js";
import responseHandler from "../handlers/response.handler.js";


const sendEmail = async (req, res, next) => {
  const user = await userModel.findById(req.user.id).select("email name");
  const { name, email } = user;
  const resetPasswordLink = "https://example.com/reset-password";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        },
  });
  const message = {
    from: process.env.MAIL_USERNAME,
    to: email,
    subject: "Changement de mot de passe",
    text: `Bonjour ${name},\n\nVous avez demandé un changement de mot de passe. Veuillez cliquer sur le lien ci-dessous pour continuer le processus de modification de mot de passe : ${resetPasswordLink}`,
  };
  try {
    await transporter.sendMail(message);
    next();
  } catch (error) {
    return responseHandler.error(res, "Failed to send email");
  }
};

export default sendEmail;
