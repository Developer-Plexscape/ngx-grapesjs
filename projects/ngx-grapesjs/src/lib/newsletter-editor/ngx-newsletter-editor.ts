import { afterNextRender, Component } from '@angular/core';

import { NgxEditor } from '../editor';
import { EditorConfig } from '../editor.config';

@Component({
  selector: 'ngx-grapes-newsletter-editor',
  template: '<div id="gjs"></div>'
})
export class NgxNewsletterEditor extends NgxEditor {
  private newsletterConfig: Partial<EditorConfig> = {
    plugins: ['grapesjs-preset-newsletter'],
    pluginsOpts: {
      'grapesjs-preset-newsletter': {
        modalTitleImport: 'Import template'
      }
    }
  };

  constructor() {
    super();
    afterNextRender(() => this.setup(this.newsletterConfig));
  }
}
