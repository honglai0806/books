import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl ='http://localhost:8080/api';
  apiUrl={
    books :`${this.baseUrl}books`
  }

  get<T>(url: string): Observable<T> {
    console.log(this.http.get<T>(url));
    return this.http.get<T>(url);
  }
  post<T>(url: string, body: any): Observable<T> {
    console.log(this.http.post<T>(url, body));
    console.log("url " + url);
    console.log("body " + body);
    return this.http.post<T>(url, body);
  }

}
