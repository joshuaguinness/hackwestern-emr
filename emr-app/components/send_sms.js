// // Download the helper library from https://www.twilio.com/docs/node/install
// // Your Account Sid and Auth Token from twilio.com/console
// const dotenv = require('dotenv');
// dotenv.config();
// // require('dotenv').config();
// // const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_ACCOUNT_AUTH_TOKEN);
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_ACCOUNT_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// // console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', accountSid);

// client.messages
//   .create({
//      body: 'This is a reminder that your appointment is on November 25 at 9:00 AM',
//      from: '+12563049854',
//      to: '+16478809670'
//    })
//   .then(message => console.log(message.sid));