import { Component, input } from '@angular/core';

import { EditorConfig } from './editor.config';

declare var grapesjs: {
  init(options: any): object;
};

@Component({ template: '' })
export class NgxEditor {

  readonly template = input('');
  readonly storagePrefix = input('gjs-');
  readonly plugins = input<string[]>([]);

  setup(customConfig: Partial<EditorConfig>) {
    const config: Partial<EditorConfig> = {
      container: '#gjs',
      components: this.template(),
      storageManager: {
        id: this.storagePrefix()
      }
    };

    return grapesjs.init({
      ...config,
      ...customConfig,
      plugins: [...customConfig.plugins!, ...this.plugins()]
    });
  }

}
