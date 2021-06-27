import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSelectionListChange } from '@angular/material/list';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DarkMode } from './../../../models/dark-mode.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() isDark!: boolean;
  @Output() darkModeSwitched: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  changTheme({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }
  constructor(private breakpointObserver: BreakpointObserver) {}
}
