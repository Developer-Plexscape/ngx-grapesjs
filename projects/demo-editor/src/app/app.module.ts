import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGrapesjsModule } from 'ngx-grapesjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxGrapesjsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
