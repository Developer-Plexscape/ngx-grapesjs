import { Component, ViewChild } from '@angular/core';
import { NgxGrapesjsComponent } from 'ngx-grapesjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'demo-editor';
  template = '<div>Test Email Template</div>'
  placeholders = [{
    value: 'UserName',
    name: 'Agent name',
    description: 'For Wings console only'
  }];

  @ViewChild(NgxGrapesjsComponent) editor: NgxGrapesjsComponent | undefined;
  getInlinedHtml(){
    console.log(this.editor?.getRawHtml());
  }
}
