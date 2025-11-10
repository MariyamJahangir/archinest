// server.js or api.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Setup transporter using SMTP credentials from .env (never expose these)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, message } = req.body;
  // Add further validation and CAPTCHA verification here

  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVE_EMAIL,
    subject: `Archinest Contact Message from ${name}`,
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.sendStatus(200);
  } catch (err) {
    console.error('Email send error:', err);
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
