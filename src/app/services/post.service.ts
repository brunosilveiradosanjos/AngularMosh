import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/validators/app-error';
import { BadInput } from '../common/validators/bad-input';
import { NotFoundError } from '../common/validators/not-found';

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
    return this.http.post(this.url, post).pipe(
      catchError((error: Response) => {
        if (error.status == 400) {
          return throwError(new BadInput(error.json()))
        }
        return throwError(new AppError(error.json()))
      })
    );
  }

  deletePost(id) {
    return this.http.delete(`${this.url}?id=${id}`).pipe(
      catchError((error: Response) => {
        if (error.status == 404)
          return throwError(new NotFoundError());
        return throwError(new AppError(error));
      })
    )
  }

  updatePost(post) {
    console.log(`updatePost - ${JSON.stringify(post)}`)
    // patch is only for changing some data in the object PUT is to substitute the object
    // return this.http.patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true }))
    return this.http.put(this.url, post);
  }
}
