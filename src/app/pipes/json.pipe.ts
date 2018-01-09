import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  template: `
          <div>
              <fieldset>
                    <h3>Json Pipe:</h3>
                    <p>Without JSON pipe:</p>
                    <pre>{{ object }}</pre>
                    <p>With JSON pipe:</p>
                    <pre>{{ object | json }}</pre>
              </fieldset>
          </div>
  `,
  styles: []
})
export class JsonPipeComponent {

  object = { 'abc': 'test', 'def': 'test1', nested: { def: 3, numbers: [1, 2, 3, 4, 5]}};

}
