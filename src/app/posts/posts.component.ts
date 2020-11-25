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
    let post = { title: input.value };
    // send converted post to the server
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        // get the id from server
        post['id'] = response.id;
        // add post to firt position of posts
        this.posts.splice(0, 0, post);
        // console.log(post['id']);
      })
  }
  ngOnInit() {
  }

}
