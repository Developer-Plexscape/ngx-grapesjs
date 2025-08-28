import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxNewsletterEditor, NgxWebpageEditor } from 'ngx-grapesjs';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgxWebpageEditor,
    NgxNewsletterEditor
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  editorMode = '';
  template = '<span>This is a test content</span>';
}
