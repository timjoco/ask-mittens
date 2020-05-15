const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, email }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('askmittens1@gmail.com');
    this.subject = subject;
    this.message = new helper.Content('text/html', content);
    this.email = new helper.Email(email);

    this.addContent(this.message);
    this.addEmail();
  }

  addEmail() {
    const personalize = new helper.Personalization();
    personalize.addTo(this.email);
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON(),
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
