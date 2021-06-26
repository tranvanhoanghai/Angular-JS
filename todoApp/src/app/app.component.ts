import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { DarkModeService } from './services/dark-mode.service';
import { DarkMode } from './models/dark-mode.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hasTodo$!: Observable<boolean>;
  dark$!: Observable<DarkMode[]>;

  constructor(
    private todoService: TodoService,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map((length) => length > 0));

    this.darkModeService.fetch();
    this.dark$ = this.darkModeService.isDark$;
  }

  onChangeMode(changeMode: boolean) {
    this.darkModeService.changeMode(changeMode);
  }
}
