import { Component, Input } from '@angular/core';

import { Config } from './editor.model';

declare var grapesjs: {
  init(options: any): object;
};

@Component({ template: '' })
export class NgxEditorComponent {

  @Input() template = '';
  @Input() storagePrefix = 'gjs-';

  setup(customConfig: Partial<Config>) {
    const config: Partial<Config> = {
      components: this.template,
      storageManager: {
        id: this.storagePrefix
      }
    };

    return grapesjs.init({
      ...config,
      ...customConfig
    });
  }

}
