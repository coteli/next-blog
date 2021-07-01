import nodemailer from "nodemailer";
export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GM_USER,
      pass: process.env.GM_PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "avsarcoteli@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Phone: </strong> ${phone} </p>
      <p><strong>Message: </strong> ${message} </p>

      `,
    });

    console.log("Message Sent");
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
