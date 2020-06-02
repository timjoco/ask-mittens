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
  app.get('/api/posts', requireLogin, (req, res, next) => {
    const user = req.user;
    res.send(user);
  });

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
  });
};
