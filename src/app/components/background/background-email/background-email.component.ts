import { Component } from '@angular/core';

@Component({
  selector: 'app-background-email',
  templateUrl: './background-email.component.html',
  styleUrls: ['./background-email.component.scss']
})
export class BackgroundEmailComponent {
  fullImagePath = '';


  constructor() {
    this.fullImagePath = '../../../assets/images/mb-bg-01.jpg';
   }



}
