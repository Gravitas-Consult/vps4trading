/**
 * Created by jasonk on 5/14/17.
 */
import { Meteor } from 'meteor/meteor';
import { Component } from '@angular/core';
import template from "./contact.html";

export class Contact {
    name: string;
    email: string;
    subject: string;
    msg: string;
}

@Component({
    selector: 'contact-page',
    template
})

export class ContactPage {
    showSuccess = false;
    showError = false;
    showErrorMsg = '';

    newContact : Contact = {
        name: '',
        email: '',
        subject: '',
        msg: ''
    };

    sendMessage() {
        this.showSuccess = false;
        this.showError = false;
        this.showErrorMsg = '';

        if (this.newContact.name == '') {
            this.showErrorMsg = 'Name field';
        }
        if (this.newContact.email == '') {
            if (this.showErrorMsg !== '') {
                this.showErrorMsg += ", ";
            }
            this.showErrorMsg += 'Email field';
        }
        if (this.newContact.subject == '') {
            if (this.showErrorMsg !== '') {
                this.showErrorMsg += ", ";
            }
            this.showErrorMsg += 'Subject field';
        }
        if (this.newContact.msg == '') {
            if (this.showErrorMsg !== '') {
                this.showErrorMsg += " and ";
            }
            this.showErrorMsg += 'Message field';
        }
        if (this.showErrorMsg.length > 0) {
            this.showErrorMsg += ' required to be populated';
            this.showError = true;
        }
        else {
            Meteor.call(
                'sendEmail',
                'Info <info@gravitas-consult.com>',
                this.newContact.name +' <'+ this.newContact.email +'>',
                'VPS4Trading.com Contact Us: '+ this.newContact.subject,
                this.newContact.msg
            );
            this.newContact = {
                name: '',
                email: '',
                subject: '',
                msg: ''
            };
            this.showSuccess = true;
            setTimeout(() => this.showSuccess = false, 5000);
        }
    }
}