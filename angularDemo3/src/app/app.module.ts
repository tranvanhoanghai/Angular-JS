import { HelloComponent } from './components/hello/hello.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiComponent } from './components/hi/hi.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

// @Decorator
@NgModule({
  //metadata
  declarations: [AppComponent, HelloComponent, HiComponent, LoadingComponent], // khai báo component
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    InputTextModule,
    PanelModule,
    RippleModule,
    ButtonModule,
  ], // nhập module khác vào
  providers: [DataService], // khai báo service
  bootstrap: [AppComponent],
})
export class AppModule {}
