import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  answer = '';
  isOpen = false;
  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

}
