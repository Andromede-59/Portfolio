const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (name, email, message) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD_EMAIL, 
        },
    });

    if(message.includes("http") || message.includes("www")) {
        return false;
    }

    let mailOptions = {
        from: `"${name}" <${email}>`,
        to: "julien.mattot@gmail.com",
        subject: "Message from Portfolio",
        text:message + "\n\n" + email,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;