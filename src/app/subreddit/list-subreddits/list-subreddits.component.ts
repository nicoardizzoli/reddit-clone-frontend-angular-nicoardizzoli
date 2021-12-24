import { throwError } from 'rxjs';
import { SubredditModel } from './../subreddit-response';
import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-list-subreddits',
  templateUrl: './list-subreddits.component.html',
  styleUrls: ['./list-subreddits.component.scss']
})
export class ListSubredditsComponent implements OnInit {

  subreddits: Array<SubredditModel> = [];

  constructor(private subredditService: SubredditService) {
      this.subredditService.getAllSubreddits().subscribe({
        next: (data) => this.subreddits = data,
        error: (e) => throwError(() => new Error(e))
      })
  }

  ngOnInit(): void {
  }

}
