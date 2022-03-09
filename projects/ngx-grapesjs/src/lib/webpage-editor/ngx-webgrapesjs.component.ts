import { Component, OnInit } from '@angular/core';

import { NgxEditorComponent } from '../editor.component';
import { Config } from '../editor.model';

@Component({
  selector: 'ngx-grapes-webpage-editor',
  template: '<div id="gjs"></div>'
})

export class NgxWebpageEditorComponent extends NgxEditorComponent implements OnInit {

  private webpageConfig: Partial<Config> = {
    container: '#gjs',
    plugins: ['gjs-preset-webpage'],
    pluginsOpts: {
      'gjs-preset-webpage': {
        modalTitleImport: 'Import template'
      }
    }
  };

  ngOnInit() {
    this.setup(this.webpageConfig);
  }

}
