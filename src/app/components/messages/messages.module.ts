import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';

import { MessagesComponent } from './messages.component';

import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ MessagesComponent ],
  providers: [ MessageService ],
  exports: [ MessagesComponent ]
})
export class MessagesModule { }
