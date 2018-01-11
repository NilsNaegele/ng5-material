import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { ProfileComponent } from './profile.component';
import { ProfileSettingsComponent } from './profile-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ ProfileComponent, ProfileSettingsComponent ],
  exports: [ ProfileComponent, ProfileSettingsComponent ]
})
export class ProfileModule { }
