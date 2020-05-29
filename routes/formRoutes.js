// Handles the ask mittens form
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const helper = require('sendgrid').mail;
const creds = require('../config/keys');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const sg = require('sendgrid')(creds.sendGridKey);

const Form = mongoose.model('forms');

module.exports = (app) => {
  // const transport = {
  //   service: 'gmail',
  //   auth: {
  //     user: creds.USER,
  //     pass: creds.PASS,
  //   },
  //   tls: { rejectUnauthorized: false },
  // };

  // const transporter = nodemailer.createTransport(transport);

  // transporter.verify((error, success) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Server is ready to take messages');
  //   }
  // });

  app.post('/api/forms', requireLogin, (req, res, next) => {
    const { name, email, message } = req.body;
    const from_email = new helper.Email('askmittens1@gmail.com');
    const to_email = new helper.Email(email);
    const subject = 'Hello World from the SendGrid Node.js Library!';
    const content = new helper.Content('text/plain', message);
    const mail = new helper.Mail(from_email, subject, to_email, content);

    const form = new Form({
      name,
      email,
      message,
      _user: req.user.id,
      dateSent: Date.now(),
    });

    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, function (error, response) {
      // alert('Message Sent');
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
      form.save();
      const user = req.user.save();

      res.send(user);
    });

    // const name = req.body.name;
    // const email = req.body.email;
    // const message = req.body.message;
    // const content = `name: ${name} \n email: ${email} \n message: ${message}`;

    // const mail = {
    //   from: creds.USER,
    //   to: email,
    //   subject: 'New Question for Mittens',
    //   text: content,
    // };

    // transporter.sendMail(mail, (err, data) => {
    //   if (err) {
    //     res.json({ status: 'fail' });
    //   } else {
    //     res.json({ status: 'success' }, form.save());
    //   }
    // });
  });
};
