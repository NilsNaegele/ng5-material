import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from './alert.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService {
  token = null;
  constructor(private afAuth: AngularFireAuth, private alertService: AlertService,
              private router: Router) { }

  registerUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.afAuth.auth.currentUser.sendEmailVerification();
      })
      .catch(error => console.error(error));
  }

  signUpWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
      })
      .catch(error => console.error(error));
  }

  signUpWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
      })
      .catch(error => console.error(error));
  }

  signUpWithGithub() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
      })
      .catch(error => console.error(error));
  }

  signUpUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
      })
      .catch(error => console.error(error));
  }

  signInWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
          this.alertService.showSnackBar('Google login successful');
      })
      .catch(error => console.error(error));
  }

  signInWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
          this.alertService.showSnackBar('Facebook login successful');
      })
      .catch(error => console.error(error));
  }

  signInWithGithub() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
          this.alertService.showSnackBar('Github login successful');
      })
      .catch(error => console.error(error));
  }

  signInUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
          this.alertService.showSnackBar('Login successful');
      })
      .catch(error => console.error(error));
  }

  signInAnonymous() {
    this.afAuth.auth.signInAnonymously()
      .then((response) => {
        this.router.navigate(['/']);
        this.afAuth.auth.onAuthStateChanged(currentUser => {
          const isAnonymous = currentUser.isAnonymous;
          const uid = currentUser.uid;
          this.afAuth.auth.currentUser.getIdToken()
            .then((token: string) => this.token = token);
            this.alertService.showSnackBar('Anonymous login successful');
        });
      })
      .catch(error => console.error(error));
  }

  logOut() {
    this.afAuth.auth.signOut()
        .then((response) => {
          this.router.navigate(['/home']);
        })
        .catch(error => console.error(error));
        this.token = null;
  }

  getIdToken() {
    this.afAuth.auth.currentUser.getIdToken()
                .then((token) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token !== null;
  }

}
