import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundEmailComponent } from './background-email/background-email.component';
import { BackgroundEmptyComponent } from './background-empty/background-empty.component';
import { BackgroundNormalComponent } from './background-normal/background-normal.component';
import { BackgroundSlantComponent } from './background-slant/background-slant.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BackgroundEmailComponent,
    BackgroundEmptyComponent,
    BackgroundNormalComponent,
    BackgroundSlantComponent ],
  exports: [
    BackgroundEmailComponent,
    BackgroundEmptyComponent,
    BackgroundNormalComponent,
    BackgroundSlantComponent
  ]
})
export class BackgroundsModule { }
