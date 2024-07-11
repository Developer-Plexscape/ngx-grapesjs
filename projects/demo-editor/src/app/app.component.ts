import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgxNewsletterEditorComponent, NgxWebpageEditorComponent } from 'ngx-grapesjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
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
