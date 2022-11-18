import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PrimeNgModule } from "./modules/prime-ng.module";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {SidebarModule} from "primeng/sidebar";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";
import {ListboxModule} from "primeng/listbox";
import {MenuModule} from "primeng/menu";
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';
import {DividerModule} from "primeng/divider";





@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SidebarListComponent
  ],
  imports: [
    // Angular Module
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule,
    AppRoutingModule,
    FormsModule,
    // Prime Module
    PrimeNgModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    SidebarModule,
    ToggleButtonModule,
    ListboxModule,
    MenuModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
