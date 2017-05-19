/**
 * Created by jasonk on 5/15/17.
 */
import {Component, OnInit, NgZone} from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';

import template from "./register.html";

@Component({
    selector: 'register-page',
    template
})

export class RegisterPage implements OnInit {
    error: string;

    constructor(private router: Router, private zone: NgZone) {}

    ngOnInit() {
        this.error = '';
    }

    signup(f: any) {
        console.log(f);

        /*
        if (this.signupForm.valid) {
            Accounts.createUser({
                email: this.signupForm.value.email,
                password: this.signupForm.value.password
            }, (err) => {
                if (err) {
                    this.zone.run(() => {
                        this.error = err;
                    });
                } else {
                    this.router.navigate(['/']);
                }
            });
        }
        */
    }
}