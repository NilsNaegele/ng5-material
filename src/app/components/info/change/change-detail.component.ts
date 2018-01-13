import { Component, OnInit, Input,
          ChangeDetectionStrategy, DoCheck, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-change-detail',
  template: `
      <div (mouseenter)="onMouseEnter($event)">
          <h3>
              Change Detail:
          </h3>
          <button mat-raised-button color="primary" (click)="onDetectChanges()">
              Detect Changes
          </button>
          <br>
          <br>
          <pre>{{ course | json }}</pre>
      </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetailComponent implements OnInit, DoCheck {
  @Input() course;
  differ;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find(Object).create();
   }

   onMouseEnter(e) {
     console.log(e);
   }

   onDetectChanges() {

   }

  ngDoCheck() {
    console.log(this.course);
    const changes = this.differ.diff(this.course);
    if (changes) {
      console.log('changes detected');
      changes.forEachChangedItem(r => console.log('changed ' + r.currentValue, r));
      changes.forEachAddedItem(r => console.log('added ' + r.currentValue, r));
      changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
    } else {
      console.log('nothing changed');
    }

  }
  ngOnInit() {
  }

}
