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
  app.get('/api/user_posts', requireLogin, (req, res, next) => {
    const form = req.form;
    res.send(form);
  });

  app.post('/api/forms', requireLogin, (req, res, next) => {
    const { name, email, message } = req.body;
    const from_email = new helper.Email('askmittens1@gmail.com');
    const to_email = new helper.Email(email);
    const subject = 'Hello from Ask Mittens!';
    const content = new helper.Content(
      'text/html',
      `<!DOCTYPE html>
      <html>
         <body>
           <div style="text-align: center;">
             <h3>Hi ${name}! We would like to thank you for reaching out to Mittens!</h3>
             <p>Here is what you asked:</p>
             <p>"${message}"</p>
            <p>As soon as Mittens wakes up from his nap, he will get to work on getting you an answer ASAP</p>
            <p>Thanks again for using Ask Mittens!</p>
           </div>
         </body>`
    );
    // plain can replace html
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
