import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  template: `
      <fieldset>
            <h3>Currency Pipe:</h3>
            <div>
                <p>AngularJS: {{ angularJSPrice | currency:'EUR': false }}</p>
                <p>Angular 6: {{ angular6Price | currency:'EUR':true:'4.2-2' }}</p>
            </div>
      </fieldset>
  `,
  styles: []
})
export class CurrencyPipeComponent {

    angularJSPrice = 100.123;
    angular6Price = 1000.4567;

}
