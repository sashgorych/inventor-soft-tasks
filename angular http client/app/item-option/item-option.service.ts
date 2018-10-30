
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ItemOption} from './item-option';
import {throwError as observableThrowError, Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ItemOptionService {

  constructor(private http: HttpClient) {

  }
  getUser(): Observable<ItemOption[]> {
    return this.http.get<ItemOption[]>('https://api.github.com/users').pipe(
    catchError(this.errorHendler));
  }
  errorHendler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server error' );
  }
}
