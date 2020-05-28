const nodemailer = require('nodemailer');
const creds = require('../config/keys');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Form = mongoose.model('forms');

module.exports = (app) => {
  const transport = {
    service: 'gmail',
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
    tls: { rejectUnauthorized: false },
  };

  const transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  app.post('/api/forms', requireLogin, (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message}`;

    const form = new Form({
      name,
      email,
      message,
      _user: req.user.id,
      dateSent: Date.now(),
    });

    const mail = {
      from: creds.USER,
      to: email,
      subject: 'New Question for Mittens',
      text: content,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({ status: 'fail' });
      } else {
        res.json({ status: 'success' }, form.save());
      }
    });
  });
};
