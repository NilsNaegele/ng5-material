import { Component, OnInit, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  template: `
        <h3>
            Change Detection:
        </h3>
        <button mat-raised-button (click)="onMutate()">Mutate</button>
        <button mat-raised-button (click)="onChange()">Change</button>
        <br><br>
        <pre class="source">{{ change2 | json }}</pre>
        <app-change-detail [course]="change1"></app-change-detail>
  `,
  styles: [`.source {
          background-color: #ccc;
  }`]
})
export class ChangeDetectionComponent implements OnInit {

  change1: any;
  change2: any;

  constructor() { }

  ngOnInit() {
    this.change1 = { title: 'Angular 5 Love Affair', author: 'Nils' };
    this.change2 = this.change1;
  }

  onMutate() {
    console.log('onMutate');
    this.change1.title = 'Angular 6 Love Affair';
    this.change1.author = 'Micky';
  }

  onChange() {
    console.log('onChange');
    this.change1 = { title: 'Angular 8 Love Affair', author: 'Flash'};
    this.change2 = this.change1;
  }

}
