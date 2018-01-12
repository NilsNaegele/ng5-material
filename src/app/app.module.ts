import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app.routing';
import { PipesModule } from './pipes/pipes.module';
import { BackgroundsModule } from './components/background/backgrounds.module';
import { BlocksModule } from './components/blocks/blocks.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProfileModule } from './profile/profile.module';
import { MessagesModule } from './components/messages/messages.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EmailMeComponent } from './components/email-me/email-me.component';

import { AlertService } from './components/shared/services/alert.service';
import { AuthenticationService } from './components/shared/services/authentication.service';
import { UserService } from './components/shared/services/user.service';
import { WindowService } from './components/shared/services/window.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    EmailMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MessagesModule,
    PipesModule,
    BlocksModule,
    BackgroundsModule,
    AuthenticationModule,
    ProfileModule,
    AppRoutingModule
  ],
  providers: [ AlertService, UserService, AuthenticationService, WindowService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
