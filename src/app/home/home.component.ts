import { PostService } from './../shared/post.service';
import { PostModel } from './../shared/post-model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  posts$: Array<PostModel> = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts$ = posts;
    })
  }

  ngOnInit(): void {
  }

  upvotePost(){

  }

  downvotePost(){

  }

  goToPost(id: number) {

  }

}
