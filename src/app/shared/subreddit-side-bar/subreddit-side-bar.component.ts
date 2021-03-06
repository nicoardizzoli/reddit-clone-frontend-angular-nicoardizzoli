import { SubredditService } from './../../subreddit/subreddit.service';
import { Component, OnInit } from '@angular/core';
import { SubredditModel } from 'src/app/subreddit/subreddit-response';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.scss']
})
export class SubredditSideBarComponent implements OnInit {

  subreddits!: Array<SubredditModel>;
  displayViewAll!: boolean;

  constructor(private subredditService: SubredditService) {
    this.subredditService.getAllSubreddits().subscribe(data => {

      if (data.length >= 4) {
        this.subreddits = data.splice(0,3)
      } else {
        this.subreddits = data;
      }
    })
   }

  ngOnInit(): void {
  }

}
