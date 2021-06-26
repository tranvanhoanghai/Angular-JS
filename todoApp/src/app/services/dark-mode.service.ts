import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private static readonly DarkModeStorageKey = 'darkMode';

  // BehaviorSubject lấy giá trị cuối cùng

  private darkMode = { isDarkMode: false };
  private _isDark: BehaviorSubject<any> = new BehaviorSubject<any>(
    this.darkMode.isDarkMode
  );

  isDark$: Observable<boolean> = this._isDark.asObservable();

  constructor(private storageService: LocalStorageService) {}

  fetch() {
    this.storageService.setObject(
      DarkModeService.DarkModeStorageKey,
      this.darkMode
    );
    // this._isDark = this.storageService.getValue(
    //   DarkModeService.DarkModeStorageKey
    // );
    // this.updateTodosData();
  }

  private updateTodosData() {
    this._isDark.next(this.darkMode.isDarkMode);
  }

  updateToLocalStorage(dark: boolean) {
    this.storageService.setObject(DarkModeService.DarkModeStorageKey, dark);
    // this.updateTodosData();
    console.log('updatee', dark);
  }
}
