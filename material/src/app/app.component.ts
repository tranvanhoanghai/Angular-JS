import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkMode } from './models/dark-mode.model';
import { DarkModeService } from './services/dark-mode.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDark!: boolean;

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.darkModeService.fetch();
    this.darkModeService.isDark$.subscribe((val) =>
      val.map((isDark: any) => (this.isDark = isDark.isDarkMode))
    );
  }

  switchMode(isDarkMode: boolean) {
    this.darkModeService.changeMode(isDarkMode);
  }
}
