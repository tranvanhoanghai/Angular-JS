import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({         // @Decorator sẽ có metadata
  declarations: [   // khai báo component
    AppComponent
  ],
  imports: [        // nhập module khác vào
    BrowserModule
  ],
  providers: [],    // khai báo service
  bootstrap: [AppComponent]
})
export class AppModule { }
