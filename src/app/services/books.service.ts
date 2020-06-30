import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, from } from 'rxjs';
import {Book} from '../models/Book';
import { RootObj } from '../models/root-obj';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private apiService: ApiService) { }
  list(): Observable<RootObj<[Book]>> {
    return this.apiService.get<RootObj<[Book]>>(this.apiService.apiUrl.books);
  }
}
