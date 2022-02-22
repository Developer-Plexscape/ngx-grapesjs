import { NgModule } from '@angular/core';

import { NgxNewsletterEditorComponent } from './newsletter-editor/ngx-newsletter-editor.component';
import { NgxWebpageEditorComponent } from './webpage-editor/ngx-webgrapesjs.component';

@NgModule({
  declarations: [
    NgxNewsletterEditorComponent,
    NgxWebpageEditorComponent
  ],
  exports: [
    NgxNewsletterEditorComponent,
    NgxWebpageEditorComponent
  ]
})
export class NgxGrapesjsModule { }
