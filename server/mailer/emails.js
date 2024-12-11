import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { sendEmail } from "./nodemailerConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  // Define sender from environment variable
  const sender = process.env.SMTP_USER; // Use environment variable for the sender email
  
  // Wrap email in an array as 'to' expects an array of email objects
  const recipient = [email];

  try {
    const response = await sendEmail({
      from: sender,                // sender's email address
      to: recipient,               // recipient email
      subject: "Verify Your Email", // subject line
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken), // email content
      category: "Email Verification",  // Optional: for categorizing your email (could be helpful for tracking)
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error('Error sending verification email', error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [email];

    try {
        
        await sendEmail({
            from: process.env.SMTP_USER,
            to: recipient,
            subject: "Welcome to Health Connect",
            html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
            category: "Welcome Email",
        })
        console.log("Email sent successfully");
        } catch (error) {
            console.error('Error sending welcome email', error);
        }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [email];
     try {
        await sendEmail({
            from: process.env.SMTP_USER,
            to: recipient,
            subject: "Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset Email",
        })
        console.log("Email sent successfully");
} catch (error) {
    console.error('Error sending password reset email', error);
    throw new Error(`Error sending password reset email: ${error.message}`);
}   
}

export const sendPasswordResetSuccessEmail = async (email) => {
    const recipient = [email];
    try {
        await sendEmail({
            from: process.env.SMTP_USER,
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE   ,
            category: "Password Reset Success Email",
        })
        console.log("Email sent successfully");
    } catch (error) {
        console.error('Error sending password reset success email', error);
        throw new Error(`Error sending password reset success email: ${error.message}`);
    }
}