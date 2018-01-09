import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material/material.module';

import { FirstBlockComponent } from './first-block/first-block.component';
import { SecondBlockComponent } from './second-block/second-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';
import { CardBlockComponent } from './card-block/card-block.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
    CardBlockComponent
  ],
  exports: [
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
    CardBlockComponent
  ]
})
export class BlocksModule { }
