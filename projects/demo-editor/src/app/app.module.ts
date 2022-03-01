import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGrapesjsModule } from 'ngx-grapesjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxGrapesjsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
