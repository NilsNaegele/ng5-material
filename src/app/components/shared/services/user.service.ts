import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { User } from '../models/user';
import { Profile } from '../models/profile';

import { AlertService } from './alert.service';

@Injectable()
export class UserService {


  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth,
     private alertService: AlertService) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
    });
  }

  get(uid: string): FirebaseObjectObservable<User> {
    return this.db.object('/users/' + uid);
  }

  saveUserInfo(uid, name, email) {
    return firebase.database().ref().child('users/' + uid).set({
      name: name,
      email: email
    });
  }

  updateUserInfo(uid, displayName, bio) {
    return firebase.database().ref().child('users/' + uid).set({
      displayName: displayName,
      bio: bio
    });
  }

  getAdmin() {
    return firebase.database().ref().child('users/' + 'ABC.XYZ')
    .on('value', (snapshot) => { });
  }

  keepInTouch(email) {
    this.alertService.showSnackBar('Your email is saved.');
    return firebase.database().ref().child('touch/').push({
              email: email
    });
  }

  contactFormSend(organization, firstName, lastName, address, city, postal, message) {
   this.alertService.showSnackBar('Contact details saved.');
   return firebase.database().ref().child('contactform/').push({
                  organization: organization,
                  firstname: firstName,
                  lastName: lastName,
                  address: address,
                  city: city,
                  postal: postal,
                  message: message
   });
  }

  getUserProfileInformation() {
    const user = this.afAuth.auth.currentUser;
    let name, email, photoUrl, uid, emailVerified;

    if (user !== null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      uid = user.uid;
      emailVerified = user.emailVerified;
    }
  }

  verificationUserEmail() {
    this.afAuth.auth.currentUser.sendEmailVerification().then(() => {
            // email sent
            console.log('Verification email sent.');
    }, (error) => console.error('Error sending verification email.'));
  }

  sendUserPasswordResetEmail() {
    this.afAuth.auth.sendPasswordResetEmail(this.afAuth.auth.currentUser.email).then(() => {
            // email sent
            console.log('Password reset email sent.');
    }, (error) => console.error('Error sending password reset email.'));
  }


}
