import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public newMessage: string;
  public messages: any;

  constructor(public messageService: MessageService) {
    if (firebase.auth().currentUser) {
    this.messageService.displayName = firebase.auth().currentUser.displayName;
    this.messageService.email = firebase.auth().currentUser.email;
    this.messages = this.messageService.messages;
    }
  }

  ngOnInit() {
    this.messages = this.messageService.getAllMessages();
  }

  isYou(email) {
    return (email === this.messageService.email) ? true : false;
  }

  isMe(email) {
    return (email === this.messageService.email) ? true : false;
  }

  sendMessage() {
    this.messageService.sendMessage('', this.newMessage);
    this.newMessage = '';
  }

}
