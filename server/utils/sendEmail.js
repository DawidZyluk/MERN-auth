import nodemailer from "nodemailer";
import path from "path";
import { renderFile } from "ejs";

export const sendEmail = async (receiver, subject, payload, template) => {
  try {
    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const __dirname = path.resolve();
    const renderedTemplate = await renderFile(__dirname + template, {
      receiver,
      payload,
    });

    var mailOptions = {
      from: process.env.FROM_EMAIL,
      to: receiver,
      subject: subject,
      html: renderedTemplate,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
    });
  } catch (error) {
    console.log(error);
    throw new Error("Could not send Email")
  }
};
