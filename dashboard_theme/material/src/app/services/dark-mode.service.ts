import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DarkMode } from '../models/dark-mode.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private static readonly DarkModeStorageKey = 'darkMode';

  private darkMode!: DarkMode[];

  // BehaviorSubject lấy giá trị cuối cùng
  private _isDark: BehaviorSubject<DarkMode[]> = new BehaviorSubject<
    DarkMode[]
  >([]);

  isDark$: Observable<any> = this._isDark.asObservable();

  constructor(private storageService: LocalStorageService) {}

  fetch() {
    this.darkMode = this.storageService.getValue<DarkMode[]>(
      DarkModeService.DarkModeStorageKey
    ) || [{}];
    this.updateTodosData();
  }

  private updateTodosData() {
    this._isDark.next(this.darkMode);
  }

  updateToLocalStorage() {
    this.storageService.setObject(
      DarkModeService.DarkModeStorageKey,
      this.darkMode
    );
    this.updateTodosData();
  }

  changeMode(change: boolean) {
    this.darkMode.map((dark) => (dark.isDarkMode = change));
    this.updateToLocalStorage();
  }
}
