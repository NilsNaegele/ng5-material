import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './../material/material.module';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PhoneSigninComponent } from './phone-signin/phone-signin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  declarations: [ SigninComponent, SignupComponent, PhoneSigninComponent ],
  exports: [ SigninComponent, SignupComponent, PhoneSigninComponent ]
})
export class AuthenticationModule { }
