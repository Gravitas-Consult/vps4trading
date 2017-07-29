import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email'

// Environment
process.env.MAIL_URL="smtps://jason@gravitas-consult.com:4l4Yna0617@smtp.gmail.com:465/";

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    sendEmail(to, from, subject, text) {
        // Make sure that all arguments are strings.
        check([to, from, subject, text], [String]);
        // Let other method calls from the same client start running, without
        // waiting for the email sending to complete.
        this.unblock();
        Email.send({ to, from, subject, text });
    }
});
