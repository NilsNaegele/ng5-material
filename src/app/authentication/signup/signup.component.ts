import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService } from './../../components/shared/services/alert.service';
import { AuthenticationService } from './../../components/shared/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Input() loading = false;

  constructor(private authenticationService: AuthenticationService,
              private alertService: AlertService) { }

  onRegister(form: NgForm) {
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authenticationService.registerUser(email, password);
    this.alertService.showSnackBar('Verification email sent to you.');
    this.loading = false;
  }

  onSignUpGoogle(form: NgForm) {
    this.loading = true;
    this.authenticationService.signUpWithGoogle();
    this.alertService.showSnackBar('Your Google registration is complete.');
  }

  onSignUpFacebook(form: NgForm) {
    this.loading = true;
    this.authenticationService.signUpWithFacebook();
    this.alertService.showSnackBar('Your Facebook registration is complete.');
  }

  onSignUpGithub(form: NgForm) {
    this.loading = true;
    this.authenticationService.signUpWithGithub();
    this.alertService.showSnackBar('Your Github registration is complete.');
  }

}
