import { throwError } from 'rxjs';
import { SubredditService } from './../subreddit.service';
import { Router } from '@angular/router';
import { SubredditModel } from './../subreddit-response';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.scss']
})
export class CreateSubredditComponent implements OnInit {

  createSubredditForm!: FormGroup;
  subredditModel!: SubredditModel;


  constructor(private router: Router, private subredditService: SubredditService) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })

    this.subredditModel = {
      name: '',
      description: '',
      postCount: 0
    }
  }

  ngOnInit(): void {
  }

  createSubreddit() {
    let name = this.createSubredditForm.get('title')!.value;
    let description = this.createSubredditForm.get('description')!.value;


    this.subredditModel.name! = name;
    this.subredditModel.description! = description;


    this.subredditService.createSubreddit(this.subredditModel).subscribe({
      next: (data) => this.router.navigateByUrl('/list-subreddits'),
      error: (e) => throwError(() => new Error(e))
    })
  }

  discard(){
    this.router.navigateByUrl('/');
  }

}
