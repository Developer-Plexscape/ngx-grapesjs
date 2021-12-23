import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGrapesjsModule } from 'projects/ngx-grapesjs/src/public-api';

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
