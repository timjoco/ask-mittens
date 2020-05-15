// Handles the ask mittens form
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const mittensForm = require('../services/emailTemplates/mittensForm');

const Form = mongoose.model('forms');

module.exports = (app) => {
  app.post('/api/forms', requireLogin, async (req, res) => {
    const { subject, message, email } = req.body;

    const form = new Form({
      subject,
      message,
      email,
      _user: req.user.id,
      dateSent: Date.now(),
    });
    // console.log(req.body);
    const mailer = new Mailer(form, mittensForm(form));
    // console.log(mailer);
    try {
      await mailer.send();
      await form.save();
      const user = await req.user.save();

      res.sent(user);
    } catch (err) {
      res.status(422);
    }
  });
};
