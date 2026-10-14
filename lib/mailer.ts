import nodemailer from "nodemailer";

const user = process.env.GMAIL_USER;
const password = process.env.GMAIL_APP_PASSWORD;

if (!user || !password) {
  throw new Error("Gmail environment variables are missing");
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass: password,
  },
});