import { Component, Inject, Input, OnInit } from '@angular/core';

import { EDITOR_CONFIG } from './editor.config';
import { Config } from './editor.model';
import { NewsletterConfig } from './newsletter-editor/newsletter-editor.model';

declare var grapesjs: {
  init(options: any): {}
};

@Component({
  template: ''
})

export class NgxEditorComponent implements OnInit {

  @Input()
  set template(content: string) {
    if (this.config) {
      this.config.components = content;
    }
  }
  @Input()
  set storagePrefix(prefix: string) {
    if (this.config) {
      this.config.storageManager.id = prefix;
    }
  }

  editor: {} | undefined = undefined;
  config: Config | undefined = undefined;

  constructor(@Inject(EDITOR_CONFIG) public baseConfig: Config) { }

  ngOnInit() {

    this.editor = grapesjs.init(this.config);

  }

  setEditorConfig(extraConfig: Partial<NewsletterConfig>) {
    this.config = {
      ...this.baseConfig,
      ...extraConfig
    };
  }

}
