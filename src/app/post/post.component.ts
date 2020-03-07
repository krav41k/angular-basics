import {Component, OnInit} from '@angular/core';
import {Post, PostsService} from '../posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;
  constructor(
    private  route: ActivatedRoute,
    // private postsService: PostsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.post = data.post;
    });
/*    this.route.params.subscribe(param => {
      console.log('Param ', param);
      this.post = this.postsService.getById(+param.id);
    });*/
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
