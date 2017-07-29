/**
 * Created by jasonk on 5/13/17.
 */
import { Meteor } from 'meteor/meteor';
import { Component } from '@angular/core';
import template from "./free-vps.html";

export class ContactVPS {
    name: string;
    email: string;
    broker: string;
}

@Component({
    selector: 'free-vps-page',
    template
})
export class FreeVPSPage {
    showLTASuccess = false;
    showLTAError = false;
    newLTAContact : ContactVPS= {
        name: '',
        email: '',
        broker: ''
    };

    showRLTASuccess = false;
    showRLTAError = false;
    newRLTAContact : ContactVPS= {
        name: '',
        email: '',
        broker: ''
    };

    showVASuccess = false;
    showVAError = false;
    newVAContact : ContactVPS= {
        name: '',
        email: '',
        broker: ''
    };

    showVAASuccess = false;
    showVAAError = false;
    newVAAContact : ContactVPS= {
        name: '',
        email: '',
        broker: ''
    };

    showIBSuccess = false;
    showIBError = false;
    newIBContact : ContactVPS= {
        name: '',
        email: '',
        broker: ''
    };

    // Custom Forms
    formField = null;
    formType = '';

    connectNow(which) {
        var showError = false;

        // Proper Form Fields
        if (which == 'lta') {
            this.formType = 'Live Trade Account';
            //this.formBody = 'I Already Have a Live Trade Account';
            this.formField = this.newLTAContact;
        }
        if (which == 'rlta') {
            this.formType = 'Register a Live Trade Account';
            this.formField = this.newRLTAContact;
        }
        if (which == 'va') {
            this.formType = 'VPS4TRADING.com Account';
            this.formField = this.newVAContact;
        }
        if (which == 'vaa') {
            this.formType = 'VPS4TRADING.com Account';
            this.formField = this.newVAAContact;
        }
        if (which == 'ib') {
            this.formType = 'IB';
            this.formField = this.newIBContact;
        }

        if (this.formField.name == '') {
            showError = true;
        }
        if (this.formField.email == '') {
            showError = true;
        }
        if (this.formField.broker == '') {
            showError = true;
        }

        if (showError) {
            // Proper Alerts
            if (which == 'lta') {
                this.showLTAError = showError;
            }
            if (which == 'rlta') {
                this.showRLTAError = showError;
            }
            if (which == 'va') {
                this.showVAError = showError;
            }
            if (which == 'vaa') {
                this.showVAAError = showError;
            }
            if (which == 'ib') {
                this.showIBError = showError;
            }
        }
        else {
            var msgBody = 'Name: '+ this.formField.name +' <'+ this.formField.email +'>\n';
            msgBody += 'Broker: '+ this.formField.broker +'\n\n';
            msgBody += 'Signed up for a '+ this.formType +' on VPSTrading.com\n';

            Meteor.call(
                'sendEmail',
                'Info <info@gravitas-consult.com>',
                this.formField.name +' <'+ this.formField.email +'>',
                'Free VPS Sign Up: '+ this.formType,
                msgBody
            );
            // Proper Alerts
            if (which == 'lta') {
                this.showLTASuccess = true;
                this.newLTAContact = {
                    name: '',
                    email: '',
                    broker: ''
                };
                setTimeout(() => this.showLTASuccess = false, 5000);
            }
            if (which == 'rlta') {
                this.showRLTASuccess = true;
                this.newRLTAContact = {
                    name: '',
                    email: '',
                    broker: ''
                };
                setTimeout(() => this.showRLTASuccess = false, 5000);
            }
            if (which == 'va') {
                this.showVASuccess = true;
                this.newVAContact = {
                    name: '',
                    email: '',
                    broker: ''
                };
                setTimeout(() => this.showVASuccess = false, 5000);
            }
            if (which == 'vaa') {
                this.showVAASuccess = true;
                this.newVAAContact = {
                    name: '',
                    email: '',
                    broker: ''
                };
                setTimeout(() => this.showVAASuccess = false, 5000);
            }
            if (which == 'ib') {
                this.showIBSuccess = true;
                this.newIBContact = {
                    name: '',
                    email: '',
                    broker: ''
                };
                setTimeout(() => this.showIBSuccess = false, 5000);
            }

        }
    }
}