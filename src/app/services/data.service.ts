import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/validators/app-error';
import { BadInput } from '../common/validators/bad-input';
import { NotFoundError } from '../common/validators/not-found';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(`${this.url}?id=${id}`)
      .pipe(catchError(this.handleError))
  }

  update(resource) {
    // patch is only for changing some data in the object PUT is to substitute the object
    // return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify({ isRead: true }))
    return this.http.put(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status == 400) {
      return throwError(new BadInput(error.json()))
    }
    if (error.status == 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
