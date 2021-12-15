import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'angular-dark-mode';


@Component({
  selector: 'app-dark-mode-lib',
  templateUrl: './dark-mode-lib.component.html',
  styleUrls: ['./dark-mode-lib.component.scss'],
})
export class DarkModeLibComponent {

  readonly darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
