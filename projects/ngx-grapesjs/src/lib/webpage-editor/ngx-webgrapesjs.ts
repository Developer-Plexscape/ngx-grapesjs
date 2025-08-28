import { afterNextRender, Component } from '@angular/core';

import { NgxEditor } from '../editor';
import { EditorConfig } from '../editor.config';

@Component({
  selector: 'ngx-grapes-webpage-editor',
  template: '<div id="gjs"></div>'
})
export class NgxWebpageEditor extends NgxEditor {
  private webpageConfig: Partial<EditorConfig> = {
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

  constructor() {
    super();
    afterNextRender(() => this.setup(this.webpageConfig));
  }
}
