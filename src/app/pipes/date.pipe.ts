import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  template: `
          {{ today | date:'d'}}-{{ today | date:'M'}}-{{ today | date:'y' }}
  `,
  styles: []
})
export class DatePipeComponent {
        today = Date.now();

}
