// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Thank you for using Solidarity! Your donation will help change a life!',
     from: '+19034004518',
     to: '+919969492518'
   })
  .then(message => console.log(message.sid));
