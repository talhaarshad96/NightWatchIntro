
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '716099129708-c84djjub6a7gl18h5kibi3jphg7lvc17.apps.googleusercontent.com';
const CLEINT_SECRET = 'Jva7yQYVNgkzsLojSx_XlYFZ';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04PMd-NHtQHI9CgYIARAAGAQSNwF-L9IryoU7_Rgw0Z4loczfauiPUyxls3U8eZz33I5aLCVl6jYXwvmoepSTQwCyCgsUuARtlS8';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });



class Mailer
{

async sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'arshad.talha18@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Talha Arshad <arshad.talha18@gmail.com>',
      to: 'tarshad@nisum.com',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
}

// sendMail()
//   .then((result) => console.log('Email sent...', result))
//   .catch((error) => console.log(error.message));



module.exports = Mailer;