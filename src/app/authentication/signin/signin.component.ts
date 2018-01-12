import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from './../../components/shared/services/alert.service';
import { AuthenticationService } from './../../components/shared/services/authentication.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  isLoading = false;

  constructor(private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  onSignInGoogle(form: NgForm) {
    this.isLoading = true;
    this.authenticationService.signInWithGoogle();
  }

  onSignInFacebook(form: NgForm) {
    this.isLoading = true;
    this.authenticationService.signInWithFacebook();
  }

  onSignInGithub(form: NgForm) {
    this.isLoading = true;
    this.authenticationService.signInWithGoogle();
  }

  onSignIn(form: NgForm) {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authenticationService.signInUser(email, password);
  }

  onSignInAnonymous(form: NgForm) {
    this.isLoading = true;
    this.authenticationService.signInAnonymous();

  }





}
