import { PostModel } from './../post-model';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { faArrowUp,faArrowDown,faComments } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.scss']
})
export class PostTitleComponent implements OnInit {


   posts$ : Array<PostModel> = [];
   faArrowUp = faArrowUp;
   faArrowDown = faArrowDown;
   faComments = faComments;
   upvoteColor: string = "";
   downvoteColor: string = "";

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts$ = posts;
    })
  }

  ngOnInit(): void {
  }

}
