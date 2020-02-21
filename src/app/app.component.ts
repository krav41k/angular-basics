import { Component } from '@angular/core';
import {Subscription, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription;
  steam$: Subject<number> = new Subject<number>();
  counter = 0;

  constructor() {

    this.sub = this.steam$.subscribe(value => {
      console.log(value);
    });
  }

  next() {
    this.counter++;
    this.steam$.next(this.counter);
  }

  stop() {
    this.sub.unsubscribe();
  }
}
