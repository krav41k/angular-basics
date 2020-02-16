import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {
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

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('Timeout');
    //   this.posts[0] = {
    //     title: 'change',
    //     text: 'changed text'
    //   };
    // }, 5000);
  }

  updatePosts(post: Post) {
    console.log('Post', post);
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
