import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './../services/authentication.service';
import * as firebase from 'firebase';

import { UserService } from './../services/user.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = '';
  angular = '';
  isAuthenticated = false;

  menuItems: Object[] = [
    {
      icon: 'description',
      title: 'Angular Packages',
      link: 'https://www.npmjs.com/~angular'
    },
    {
      icon: 'link',
      title: 'Check me on Github',
      link: 'https://github.com/NilsNaegele/ng5-material'
    }
  ];

  constructor(private afAuth: AngularFireAuth,
              public authenticationService: AuthenticationService,
              private userService: UserService,
              private alertService: AlertService) {
    this.angular = '../../../assets/images/angular.png';
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

  userUid() {
    this.userService.getUserProfileInformation();
    return this.afAuth.auth.currentUser.uid;
  }

  userEmail() {
    this.userService.getUserProfileInformation();
    return this.afAuth.auth.currentUser.email;
  }

  userName() {
    this.userService.getUserProfileInformation();
    return this.afAuth.auth.currentUser.displayName;
  }

  onLogout() {
    this.authenticationService.logOut();
    this.alertService.showSnackBar('Sucessfully logged out');
  }

}
