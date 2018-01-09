import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PhoneSigninComponent } from './phone-signin/phone-signin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SigninComponent, SignupComponent, PhoneSigninComponent]
})
export class AuthenticationModule { }
