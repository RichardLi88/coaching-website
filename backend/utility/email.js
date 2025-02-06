import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI;
const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
const user = process.env.USER;
const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(clientId, clientSecret, redirectURI);
OAuth2_client.setCredentials({ refresh_token: refreshToken });

export async function send_mail(recipient, subject, text) {
  const accessToken = await OAuth2_client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: user,
      clientId: clientId,
      clientSecret: clientSecret,
      accessToken: accessToken.token,
    },
  });

  const mail_options = {
    from: `Richard TT <${user}>`,
    to: recipient,
    subject: { subject },
    text: { text },
  };

  transport.sendMail(mail_options, (error, result) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(result);
    }
  });
}
