import { Component, Input, OnInit } from '@angular/core';

import { Config } from '../editor.model';

declare var grapesjs: {
  init(options: any): {}
};

@Component({
  selector: 'lib-webpage-editor',
  template: '<div id="gjs"></div>'
})

export class NgxWebpageEditorComponent implements OnInit {

  @Input()
  set template(content: string) {
    this.config.components = content;
  }
  @Input()
  set storagePrefix(prefix: string) {
    this.config.storageManager.id = prefix;
  }

  editor: {} | undefined = undefined;
  config: Config = {
    container: '#gjs',
    plugins: ['gjs-preset-webpage'],
    components: '',
    pluginsOpts: {
      'gjs-preset-webpage': {
        modalTitleImport: 'Import template'
      }
    },
    storageManager: {
      id: 'gjs-'
    }
  };

  constructor() { }

  ngOnInit() {

    this.editor = grapesjs.init(this.config);

  }

}
