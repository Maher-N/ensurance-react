// import nodemailer from 'nodemailer';

// function sendEmailOTP(email, otp) {

//   const transporter = nodemailer.createTransport({
//     host: "mail.paltel.ps",
//     port: 25,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//       user: "username",
//       pass: "password",
//     },
//   });

//   const mailOptions = {
//     from: 'your-gmail-username',
//     to: email,
//     subject: 'One-Time Password (OTP) for Login',
//     text: `Your OTP is ${otp}`
//   };

//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }