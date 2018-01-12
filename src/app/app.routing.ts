import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileSettingsComponent } from './profile/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'info', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SigninComponent },

  { path: 'profile', component: ProfileComponent },
  { path: 'profile-settings', component: ProfileSettingsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
