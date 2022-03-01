import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
