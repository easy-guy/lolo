const nodemailer = require('nodemailer');

module.exports = function(email, subject, message) {
  const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'alisher.01.naz@gmail.com', pass: '1332alisher' }
  });

  mailTransport.sendMail(
    {
      from: 'Alpha',
      to: email,
      subject: subject,
      text: message
    },
    function(err, info) {
      console.log(info);
      console.log(err);
    }
  );
};
