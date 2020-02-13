import { Component } from '@angular/core';

export  interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Хочу выучить Angular компоненты',
      text: 'Я учу компоненты Angular',
      id: 0
    },
    {
      title: 'Куплю гараж',
      text: 'Куплю гараж. Звоните +8-800-555-3535',
      id: 1
    }
  ];
}
