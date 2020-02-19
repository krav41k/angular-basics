import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  e: number = Math.E;

  str = 'hello world';

  date: Date = new Date();

  float = 0.42;

  obj = {
    a: 1,
    b: 1,
    c: {
      d: 2,
      e: {
        f: 3,
        g: 3
      }
    }
  };
}
