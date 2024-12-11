export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, hsl(199, 89%, 48%), hsl(199, 80%, 43%)); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: hsl(199, 89%, 48%);">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, hsl(199, 89%, 48%), hsl(199, 80%, 43%)); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: hsl(199, 89%, 48%); color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, hsl(199, 89%, 48%), hsl(199, 80%, 43%)); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: hsl(199, 89%, 48%); color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:ital,wght@0,200;0,400;0,700" rel="stylesheet">
    <style>
      body, table, td {
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: 'Nunito Sans', Arial, sans-serif;
      }

      img {
        border: 0;
        max-width: 100%;
      }

      .container {
        width: 600px;
        margin: auto;
      }

      h1 {
        font-size: 32px;
        color: #000a28;
        text-align: left;
      }

      p,
      ul {
        font-size: 16px;
        color: #000a28;
      }

      ul {
        margin: 0 0 10px 20px;
        padding: 0;
      }

      li {
        margin-bottom: 5px;
      }

      .footer {
        border-top: 1px solid #cccccc;
        padding: 20px 0;
        text-align: center;
        color: #cccccc;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <table role="presentation">
      <tr>
        <td align="center">
          <table class="container" role="presentation">
            <tr>
              <td style="padding: 20px;">
                <img src="https://cloudfilesdm.com/postcards/image-1733895257631.png" alt="Health Connect">
                <h1>Welcome to Health Connect!</h1>
                <p>Hello {{name}},<br>Welcome to Health Connect! We're excited to have you as part of our community. Our mission is to help you manage and improve your health with the best tools, expert advice, and the latest in wellness trends.</p>
                <p><strong>Health Tips for You:</strong></p>
                <ul>
                  <li><strong>Track Your Health:</strong> Regularly track your symptoms, appointments, and medications for better health management.</li>
                  <li><strong>Stay Active:</strong> Even a short daily walk can make a significant difference in your overall well-being.</li>
                  <li><strong>Regular Check-ups:</strong> Make sure to schedule regular health check-ups with trusted doctors to stay ahead of potential issues.</li>
                </ul>
                <p><strong>Find the Right Care:</strong><br>At Health Connect, we make it easy for you to find the right healthcare professionals. Whether you need a general practitioner, specialist, or therapist, our directory is designed to help you connect with the best care options near you.</p>
              </td>
            </tr>
            <tr>
              <td class="footer">
                <p>&copy; 2024 Health Connect. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
;