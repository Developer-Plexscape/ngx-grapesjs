import { NgModule } from '@angular/core';

import { BASE_CONFIG, EDITOR_CONFIG } from './editor.config';
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
  ],
  providers: [
    { provide: EDITOR_CONFIG, useValue: BASE_CONFIG }
  ]
})
export class NgxGrapesjsModule { }
