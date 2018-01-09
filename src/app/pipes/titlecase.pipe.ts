import { Component } from '@angular/core';

@Component({
  selector: 'app-titlecase-pipe',
  template: `
        {{ message }}
  `,
  styles: []
})
export class TitlecasePipeComponent {

  message = 'Angular 5 Material';

}
