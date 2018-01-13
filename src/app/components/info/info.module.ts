import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipesModule } from '../../pipes/pipes.module';
import { MaterialModule } from '../../material/material.module';

import { InfoComponent } from './info.component';
import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';
import { TableComponent } from './table/table.component';
import { ChangeDetectionComponent } from './change/change-detection.component';
import { ChangeDetailComponent } from './change/change-detail.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [
    InfoComponent,
    VirtualRealityComponent,
    TableComponent,
    ChangeDetectionComponent,
    ChangeDetailComponent,
    CarouselComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class InfoModule { }
