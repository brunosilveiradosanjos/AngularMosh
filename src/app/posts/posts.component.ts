import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  private url: any = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        // console.log(response)
        this.posts = response;
      });
  }

  createPosts(input: HTMLInputElement) {
    let post: any = { title: input.value };
    // send converted post to the server
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {

        // get the id from server and storing into posts with title = response value
        post.id = response;
        console.log(post);
        // add post to firt position of posts
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post) {
    // patch is only for changing some data in the object PUT is to substitute the object
    this.http.patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true }))
      .subscribe(response => console.log(response));
    // this.http.patch(this.url, JSON.stringify(post));
    console.log(post);
  }

  deletePost(post) {
    this.http.delete(`${this.url}/${post.id}`)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(this.posts);
      })
  }

  ngOnInit() {
  }

}
