import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxNewsletterEditorComponent, NgxWebpageEditorComponent } from 'ngx-grapesjs';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgxWebpageEditorComponent,
    NgxNewsletterEditorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  editorMode = '';
  template = '<span>This is a test content</span>'
  placeholders = [{
    value: 'MyPlaceholder',
    name: 'Custom placeholder',
    description: 'This is a custom placeholder'
  }];
}
