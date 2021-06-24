import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // global
})
export class DataService {
  constructor() {}

  private _textFromHelloSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  // get textFromHello(): any {
  //   return this._textFromHello;
  // }

  textFromHello$: Observable<string> =
    this._textFromHelloSubject.asObservable();

  setTextFromHello(text: any) {
    this._textFromHelloSubject.next(text);
  }
}
