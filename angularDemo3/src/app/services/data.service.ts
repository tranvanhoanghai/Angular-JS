import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // global
})
export class DataService {
  constructor(private http: HttpClient) {}

  private url = 'https://5fa04305e21bab0016dfd001.mockapi.io/api/v1/listphone';

  // BehaviorSubject là Subject, lấy đc giá trị cuối cùng
  private _textFromHelloSubject = new BehaviorSubject<string>('');

  textFromHello$: Observable<string> =
    this._textFromHelloSubject.asObservable();

  setTextFromHello(text: any) {
    this._textFromHelloSubject.next(text);
    // console.log('from services:', { text });
  }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  add(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
