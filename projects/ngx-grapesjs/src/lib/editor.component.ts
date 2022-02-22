import { Component, Input } from '@angular/core';

import { Config } from './editor.model';

declare var grapesjs: {
  init(options: any): {}
};

@Component({
  template: '<div id="gjs"></div>'
})

export class NgxEditorComponent {

  @Input() template: string = '';
  @Input() storagePrefix: string = 'gjs-';

  setup(customConfig: Partial<Config>) {

    const config: Config = {
      container: '',
      plugins: [],
      components: this.template,
      pluginsOpts: {},
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
