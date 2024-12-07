import { Component, OnInit, input } from '@angular/core';

import { NewsletterConfig, NewsletterEditor, TextAction, TextEditor } from './newsletter-editor.model';
import { Placeholder } from './placeholder.model';
import { NgxEditorComponent } from '../editor.component';

@Component({
  selector: 'ngx-grapes-newsletter-editor',
  template: '<div id="gjs"></div>'
})
export class NgxNewsletterEditorComponent extends NgxEditorComponent implements OnInit {
  readonly placeholders = input<Placeholder[]>([]);

  private editor: NewsletterEditor | undefined;
  private newsletterConfig: Partial<NewsletterConfig> = {
    container: '#gjs',
    plugins: ['grapesjs-preset-newsletter'],
    pluginsOpts: {
      'grapesjs-preset-newsletter': {
        modalTitleImport: 'Import template'
      }
    }
  };

  ngOnInit() {
    this.editor = this.setup(this.newsletterConfig);
    this.addPlaceholders();
  }

  private addPlaceholders() {
    const placeholders = this.placeholders();
    if (placeholders.length) {
      const placeholderSelectOptions = placeholders.map(placeholder =>
        `<option
            title="${placeholder.description}"
            data-tooltip-pos="bottom"
            data-tooltip="Bold"
            class="gjs-one-color"
            value="<% ${placeholder.value} %>"
        >
        ${placeholder.name}
        </option>`
      );

      this.editor?.RichTextEditor?.add('placeholders', {
        icon: `<select class="gjs-field gjs-two-color">
                <option class="gjs-one-color" value="">- Select placeholder -</option>
                ${placeholderSelectOptions}
              </select>
        `,
        event: 'change',
        result: (rte: TextEditor, action: TextAction) => rte.insertHTML(action.btn.firstChild.value),
        update: (_: TextEditor, action: TextAction) => action.btn.firstChild.value = ''
      });
    }
  }

}
