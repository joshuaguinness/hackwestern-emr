// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => {
  const accountSid = "ACec4d8945f5417" + "dd879456805aefdbaa3";
  const authToken = "175256a1b6539fb2" + "4f6d03cf90133424";
  const client = require('twilio')(accountSid, authToken);

  // console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', accountSid);

  client.messages
    .create({
      body: 'This is a reminder that your appointment is on November 25 at 9:00 AM',
      from: '+12563049854',
      to: '+16478809670'
    })
    .then(message => console.log(message.sid));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))