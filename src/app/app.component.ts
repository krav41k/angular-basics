import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  p: Promise<string> = new Promise<string>( (resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved');
    }, 4000);
  });
}
