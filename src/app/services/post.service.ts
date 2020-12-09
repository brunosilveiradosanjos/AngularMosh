import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/validators/app-error';
import { BadInput } from '../common/validators/bad-input';
import { NotFoundError } from '../common/validators/not-found';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:3333/posts', http);
  }

}
