import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {
  titleCard = 'Angular';
  numberCard = 5;
  subTitleCard = 'Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges.';
  contentCard = 'Angular empowers developers to build applications that live on the web, mobile, or the desktop.';
  angularImage = '';

  constructor() {
    this.angularImage = '../../../assets/images/angular.png';
  }

  ngOnInit() {
  }

}
