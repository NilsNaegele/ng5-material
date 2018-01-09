import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncObservablePipeComponent } from './async-observable.pipe';
import { CurrencyPipeComponent } from './currency.pipe';
import { DatePipeComponent } from './date.pipe';
import { JsonPipeComponent } from './json.pipe';
import { TitlecasePipeComponent } from './titlecase.pipe';
import { YearPipeComponent } from './year.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AsyncObservablePipeComponent,
    CurrencyPipeComponent,
    DatePipeComponent,
    JsonPipeComponent,
    TitlecasePipeComponent,
    YearPipeComponent
  ],
  exports: [
    AsyncObservablePipeComponent,
    CurrencyPipeComponent,
    DatePipeComponent,
    JsonPipeComponent,
    TitlecasePipeComponent,
    YearPipeComponent
  ]
})
export class PipesModule { }
