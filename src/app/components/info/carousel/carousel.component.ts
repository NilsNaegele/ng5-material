import { Image } from './../../shared/models/image';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Image[] = [];
  constructor() { }

  ngOnInit() {
      this.images = [
        { title: 'Me N U Love Nr. 1', url: '../../../../assets/images/mb-bg-10.jpg' },
        { title: 'Me N U Love Nr. 2', url: '../../../../assets/images/mb-bg-11.jpg' },
        { title: 'Me N U Love Nr. 3', url: '../../../../assets/images/mb-bg-12.png' },
        { title: 'Me N U Love Nr. 4', url: '../../../../assets/images/mb-bg-13.jpg' },
        { title: 'Me N U Love Nr. 5', url: '../../../../assets/images/mb-bg-14.jpg' }
        // { title: 'Me N U Love Nr. 6', url: '../../../../assets/images/mb-bg-15.jpg' }
      ];
  }

}
