const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'genoveva.reilly73@ethereal.email',
        pass: 'jhVx1yqNUF8aXyBCae'
    }
});

module.exports = transporter;
