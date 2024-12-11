import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create a transporter using SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Optional: Some environments might need this to avoid insecure connection warnings
  },
});

// Send email function matching your desired API structure
const sendEmail = async ({ from, to, subject, html, category }) => {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });

    // Log to confirm the sending
    console.log('Email sent:', info.response);
    return { success: true, info };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export { sendEmail };
