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

  search = '';
  toggle = true;

  posts: Post[] = [
    { title: 'Temperature', text: '+3C'},
    { title: 'Potato', text: 'Potato - brown vegetable'},
    { title: 'Ice', text: 'Ice - solid water form'}
  ];

  addPost() {
    this.posts.unshift({
      title: 'Title',
      text: 'Experimental text'
    });
  }
}
