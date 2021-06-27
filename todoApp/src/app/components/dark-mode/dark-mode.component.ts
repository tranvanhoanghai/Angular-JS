import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DarkMode } from './../../models/dark-mode.model';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent implements OnInit {
  @Input() isDark!: boolean;
  @Output() changeMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  changeDarkMode() {
    this.changeMode.emit((this.isDark = !this.isDark));
  }
}
