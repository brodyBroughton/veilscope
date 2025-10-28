// pages/api/contact.js
import nodemailer from "nodemailer";

console.log("ENV SMTP_HOST:", process.env.SMTP_HOST);
console.log("ENV SMTP_PORT:", process.env.SMTP_PORT);
console.log("ENV SMTP_USER:", process.env.SMTP_USER);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name = "", email = "", topic = "", message = "" } = req.body;

  if (!email || !message) {
    console.warn("Contact API — Missing required field:", { email, message });
    res.status(400).json({ error: "Email and message are required." });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_PORT || "465") === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `Veilscope Support <${process.env.SMTP_USER}>`,
      to: process.env.SUPPORT_TO || "support@veilscope.com",
      subject: `Contact: ${topic || "General"} — ${name || email}`,
      text: `From: ${name || "Anonymous"} <${email}>\nTopic: ${topic}\n\n${message}`,
      replyTo: email,
    });
    console.log("SMTP host:", process.env.SMTP_HOST);
    console.log("SMTP port:", process.env.SMTP_PORT);

    console.log("Contact API — sendMail info:", info);
    res.status(200).json({ ok: true, id: info.messageId });
  } catch (error) {
    console.error("Contact API — sendMail error:", error);
    res.status(500).json({ error: "Internal server error", detail: error.message });
  }
}
