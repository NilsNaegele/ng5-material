import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { User } from '../components/shared/models/user';
import { Profile } from '../components/shared/models/profile';

import { UserService } from '../components/shared/services/user.service';
import { AlertService } from '../components/shared/services/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('imageAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(2)'
      })),
      transition('small <=> large', animate('2000ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-80%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(25px)', offset: 1 })
      ])))
    ])
  ]
})
export class ProfileComponent implements OnInit {
  uid = firebase.auth().currentUser.uid;

  fullImagePath = '';
  profileTitle = 'My Profile';
  displayName = 'Your Username';
  bio = 'Your Bio';
  state = 'small';


  constructor(private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private alertService: AlertService,
    private userService: UserService) {
    this.fullImagePath = '../../assets/images/mb-bg-03.jpg';
  }

  ngOnInit() {
    if (this.uid) {
      firebase.database()
        .ref()
        .child('users/' +  this.uid)
        .once('value').then((snap) => {
          // this.displayName = snap.val().displayName;
          // this.bio = snap.val().bio;
        });
      }
  }

  animateImage() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  userEmail() {
    this.userService.getUserProfileInformation();
    return this.afAuth.auth.currentUser.email;
  }

  onPasswordReset() {
    this.userService.sendUserPasswordResetEmail();
    this.alertService.showSnackBar('Reset password sent to your email.');
  }

}
