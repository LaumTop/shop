const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
    },
});

let mailOptions = {
    from: '"Your Name" <your_email@example.com>',
    to: 'recipient@example.com',
    subject: 'Hello from Node.js!',
    text: 'This is a test email sent using Node.js and Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info)=>
{
    if(error)
    {
        return console.log(error);
    }
});
