import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
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
    // send converted post to the server
    this.service.createPost(post)
      .subscribe(response => {
        // get the id from server and storing into posts with title = response value
        post.id = response;
        console.log(post);
        // add post to firt position of posts
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => console.log(response));
    // this.http.patch(this.url, JSON.stringify(post));
    console.log(post);
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

  ngOnInit() {
    this.service.getPost()
      .subscribe(response => {
        // console.log(response)
        this.posts = response;
      });
  }

}
