const nodemailer = require('nodemailer');

const  sendOTP = async (email, otp) => {

    const otpsend = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "mayurngohil756@gmail.com",
        pass: "uxqw site xvum xqer",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is ${otp}.`,
    };

    await otpsend.sendMail(mailOptions);
    console.log('OTP sent successfully!');
};

const sendingMail = (to, subject, html) => {
  const sendmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "mayurngohil7566@gmail.com",
      pass: "uxqw site xvum xqer",
    },
  });

  const mailOptions = {
          from: "mayurngohil756@gmail.com",
          to: to,
          subject,
          html
      }
      sendmail.sendMail(mailOptions, (err, info) => {
          if (err) {
              console.log(err);
          }
          else {
              console.log(info);
          }
      })
  }
module.exports = {sendOTP , sendingMail}
