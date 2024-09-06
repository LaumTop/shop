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
function sendMail(toEMail, subject, text)
{
    let mailOptions = {
        from: '"Your Name" <your_email@example.com>',
        to: toEMail,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, (error, info)=>
    {
        if(error)
        {
            return console.log(error);
        }
    });
}
