import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private url: any = 'https://jsonplaceholder.typicode.com/posts';
  private url: any = 'http://localhost:3333/posts';

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url)
  }

  createPost(post) {
    return this.http.post(this.url, post);
  }

  deletePost(id) {
    return this.http.delete(`${this.url}?id=${id}`);
  }

  updatePost(post) {
    console.log(`updatePost - ${JSON.stringify(post)}`)
    // patch is only for changing some data in the object PUT is to substitute the object
    // return this.http.patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true }))
    return this.http.put(this.url, post);
  }
}
