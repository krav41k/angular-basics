import { Component } from '@angular/core';
import {Subscription, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription;

  constructor() {
    const stream$ = new Observable(observer => {

      setTimeout(() => {
        observer.next(1);
      }, 500);

      setTimeout(() => {
        observer.error('Something error');
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 500);
    });

    this.sub = stream$.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('done')
    );
  }

  stop() {
    this.sub.unsubscribe();
  }
}
