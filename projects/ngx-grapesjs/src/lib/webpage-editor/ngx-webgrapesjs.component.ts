import { Component, Inject, OnInit } from '@angular/core';

import { NgxEditorComponent } from '../editor.component';
import { EDITOR_CONFIG } from '../editor.config';
import { Config } from '../editor.model';

declare var grapesjs: {
  init(options: any): {}
};

@Component({
  selector: 'lib-webpage-editor',
  template: '<div id="gjs"></div>'
})

export class NgxWebpageEditorComponent extends NgxEditorComponent implements OnInit {

  webpageConfig: Partial<Config> = {
    plugins: ['gjs-preset-webpage'],
    pluginsOpts: {
      'gjs-preset-webpage': {
        modalTitleImport: 'Import template'
      }
    }
  };

  constructor(@Inject(EDITOR_CONFIG) override baseConfig: Config) {
    super(baseConfig);
  }

  override ngOnInit() {
    super.setEditorConfig(this.webpageConfig);
    this.editor = grapesjs.init(this.config);
  }

}
