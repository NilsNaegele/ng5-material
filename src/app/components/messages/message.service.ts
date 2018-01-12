import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class MessageService {
  public messages: Observable<any>;
  public users: Observable<any>;
  public displayName: string;
  public email: string;

  constructor(private db: AngularFireDatabase) { }

  sendMessage(message, text) {
    return firebase.database().ref().child('messages/' + message).push({
      message: text,
      displayName: this.displayName,
      email: this.email,
      timeStamp: Date.now()
    });
  }

  getAllMessages() {
      return this.db.list('/messages');
  }

}
