import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { PhoneNumber } from './../../components/shared/models/phone-number';
import { AlertService } from './../../components/shared/services/alert.service';
import { AuthenticationService } from './../../components/shared/services/authentication.service';
import { WindowService } from './../../components/shared/services/window.service';
import { Window } from 'selenium-webdriver';


@Component({
  selector: 'app-phone-signin',
  templateUrl: './phone-signin.component.html',
  styleUrls: ['./phone-signin.component.scss']
})
export class PhoneSigninComponent implements OnInit {
  phoneNumber = new PhoneNumber();
  isAuthenticated = false;

  token: string;
  windowRef: any;
  verificationCode: string;
  currentUser: any;

  constructor(private windowService: WindowService, private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendLogInCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
        this.alertService.showSnackBar('Login code sent.');
      })
      .catch(error => console.error(error));

  }

  verifyLogInCode() {
    this.windowRef.confirmationResult.confirm(this.verificationCode)
      .then((result) => {
        const currentUser = result.user;
      })
      .then((response) => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);
        this.alertService.showSnackBar('Login code entered.');
      })
      .catch(error => console.error(error, 'Incorrect code entered?'));
  }

}
