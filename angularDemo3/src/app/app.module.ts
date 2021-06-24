import {HelloComponent} from './components/hello/hello.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HiComponent} from './components/hi/hi.component';
import {DataService} from "./services/data.service";

// @Decorator
@NgModule({
  //metadata
  declarations: [AppComponent, HelloComponent, HiComponent], // khai báo component
  imports: [BrowserModule, AppRoutingModule], // nhập module khác vào
  providers: [DataService], // khai báo service
  bootstrap: [AppComponent],
})
export class AppModule {
}
