import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors() {
    const authorsList = ['Leo Tolstoy', 'William Shakespeare', 'James Joyce', 'Vladimir Nabokov', 'Fyodor Dostoevsky'];
    return authorsList;
  }
}
