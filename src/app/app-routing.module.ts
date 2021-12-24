import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'sign-up', component: SignupComponent },
  {path: 'list-subreddits', component: ListSubredditsComponent },
  {path: 'login', component: LoginComponent },
  {path: 'create-post', component: CreatePostComponent },
  {path: 'create-subreddit', component: CreateSubredditComponent },
  {path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
