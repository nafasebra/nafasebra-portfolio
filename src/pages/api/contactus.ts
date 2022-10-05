// TODO: this file will be edit and to change types
export default function (req: any, res: any) {
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({});
  
  console.log(req.body);
}
