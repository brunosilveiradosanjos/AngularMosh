import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: any = 'https://xxxxxxjsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url)
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updatePost(post) {
    // patch is only for changing some data in the object PUT is to substitute the object
    return this.http.patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true }))
  }
}
