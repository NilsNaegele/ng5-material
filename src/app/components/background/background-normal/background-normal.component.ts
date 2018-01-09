import { Component } from '@angular/core';

@Component({
  selector: 'app-background-normal',
  templateUrl: './background-normal.component.html',
  styleUrls: ['./background-normal.component.scss']
})
export class BackgroundNormalComponent {
  fullImagePath = '';

  constructor() {
    this.fullImagePath = '../../../assets/images/mb-bg-06.jpg';
  }


}
