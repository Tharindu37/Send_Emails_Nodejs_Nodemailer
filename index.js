const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.USER, // Sender's gmail address
        pass: process.env.APP_PASSWORD // App password from Gmail account
    }
});

const mailOptions = {
    from: {
        name: 'Web Wizard',
        address: process.env.USER
    },
    to: "fsa@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
}

const sendMail = async () => {
    try {
        await transporter.sendMail(mailOptions); // Pass mailOptions object as an argument
        console.log('Email has been sent!');
    } catch (error) {
        console.error(error);
    }
}

sendMail();
