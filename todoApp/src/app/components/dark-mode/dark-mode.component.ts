import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent implements OnInit {
  dark$!: Observable<any>;
  a = false;
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.darkModeService.fetch();

    this.dark$ = this.darkModeService.isDark$;
    console.log(this.a);
  }

  changeDarkMode() {
    this.darkModeService.updateToLocalStorage(!this.a);
    console.log('appppppppppppp', this.dark$);
  }
}
