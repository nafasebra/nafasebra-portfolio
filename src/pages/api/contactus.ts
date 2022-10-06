require('dotenv').config()
export default async function (req: any, res: any) {
  const {name, email, subject, message} = req.body;
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "ebranafas@gmail.com",
      subject: `یک پیام از طرف  ${name} دارید`,
      html: `<p>پیام جدید از طرف وبسایت nafasebra.ir</p><br>
        <p><strong>ایمیل: </strong> ${email}</p><br>
        <p><strong>موضوع پیام: </strong> ${subject}</p><br>
        <p><strong>پیام کاربر: </strong> ${message}</p><br>
      `
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
