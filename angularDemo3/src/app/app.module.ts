import { HelloComponent } from './components/hello/hello.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiComponent } from './components/hi/hi.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// @Decorator
@NgModule({
  //metadata
  declarations: [AppComponent, HelloComponent, HiComponent], // khai báo component
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule], // nhập module khác vào
  providers: [DataService], // khai báo service
  bootstrap: [AppComponent],
})
export class AppModule {}
