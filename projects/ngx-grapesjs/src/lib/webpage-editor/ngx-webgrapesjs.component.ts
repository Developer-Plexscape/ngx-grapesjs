import { Component, OnInit } from '@angular/core';

import { NgxEditorComponent } from '../editor.component';
import { Config } from '../editor.model';

@Component({
  selector: 'ngx-grapes-webpage-editor',
  template: '<div id="gjs"></div>',
  standalone: true
})
export class NgxWebpageEditorComponent extends NgxEditorComponent implements OnInit {

  private webpageConfig: Partial<Config> = {
    container: '#gjs',
    plugins: [
      'grapesjs-preset-webpage',
      'gjs-blocks-basic'
    ],
    pluginsOpts: {
      'grapesjs-preset-webpage': {
        modalTitleImport: 'Import template'
      }
    }
  };

  ngOnInit() {
    this.setup(this.webpageConfig);
  }

}
