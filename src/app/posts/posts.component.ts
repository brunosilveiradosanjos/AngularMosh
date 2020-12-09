import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { NotFoundError } from '../common/validators/not-found';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private service: PostService) {

  }

  createPosts(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.service.createPost(post)
      .subscribe(
        response => {
          this.posts = response;
        },
        error => {
          alert(`createPosts ${post} - An unexpected error occurred.`);
          console.log(error);
        })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response)
          this.posts = response;
        },
        error => {
          alert(`updatePost ${JSON.stringify(post)} - An unexpected error occurred.`);
        });
    // this.http.patch(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.service.deletePost(333)
      .subscribe(
        response => {
          this.posts = response;
        },
        (error: Response) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted')
          } else {
            console.log(error);
          }

        })
  }

  ngOnInit() {
    this.service.getPost()
      .subscribe(response => {
        this.posts = response;
      },
        error => {
          alert('ngOnInit - An unexpected error occurred.')
        });
  }

}
