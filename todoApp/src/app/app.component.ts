import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { DarkModeService } from './services/dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hasTodo$!: Observable<boolean>;

  constructor(
    private todoService: TodoService,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map((length) => length > 0));
  }
}
