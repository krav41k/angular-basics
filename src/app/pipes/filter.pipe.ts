import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchType: boolean = true): Post[] {
    if (!search.trim()) {
      return posts;
    }

    if (searchType) {
      return posts.filter(post => {
        return post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      });
    } else {
      return posts.filter(post => {
        return post.text.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      });
    }
  }

}
