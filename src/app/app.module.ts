import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import * as firebase from 'firebase';
import { environment } from './../environments/environment';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app.routing';
import { PipesModule } from './pipes/pipes.module';
import { BackgroundsModule } from './components/background/backgrounds.module';
import { BlocksModule } from './components/blocks/blocks.module';

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


// firebase.initializeApp(environment.firebase);

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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    PipesModule,
    BlocksModule,
    BackgroundsModule,
    AppRoutingModule
  ],
  providers: [ AlertService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
