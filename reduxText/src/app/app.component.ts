import { Component, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reduxText';
  a!: any;
  dino!: any;
  count = 5;
  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.a = this.http.get('https://jsonplaceholder.typicode.com/todos/');

    // .subscribe((data) => {
    //   this.a = data;
    // });
    // console.log('ngOnInit');
  }
}
