import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Profile } from '../components/shared/models/profile';

import { UserService } from '../components/shared/services/user.service';
import { AuthenticationService } from '../components/shared/services/authentication.service';
import { AlertService } from '../components/shared/services/alert.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  uid = this.afAuth.auth.currentUser.uid;
  displayName = 'Your Username';
  bio = 'Your Bio';

  constructor(private afAuth: AngularFireAuth,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    firebase.database().ref().child('users/' + this.uid).once('value').then((snap) => {
      this.displayName = snap.val().displayName;
      this.bio = snap.val().bio;
    });
  }

  onPasswordReset() {
    this.userService.sendUserPasswordResetEmail();
    this.alertService.showSnackBar('Reset password sent to your email.');
  }

  onUpdateUserInfo(form: NgForm) {
    const displayName = form.value.displayName;
    const bio = form.value.bio;
    this.userService.updateUserInfo(this.uid, displayName, bio);
    this.alertService.showSnackBar('Settings saved.');
  }

  onLogout() {
    this.authenticationService.logOut();
    this.alertService.showSnackBar('Logout successful.');
  }

}
