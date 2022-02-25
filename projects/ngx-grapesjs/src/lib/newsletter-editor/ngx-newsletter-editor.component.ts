import { Component, Input, OnInit } from '@angular/core';

import { NgxEditorComponent } from '../editor.component';
import { CommandSender, NewsletterConfig, NewsletterEditor, TextAction, TextEditor } from './newsletter-editor.model';
import { NgxNewsletterEditorService } from './ngx-newsletter-editor.service';
import { Placeholder } from './placeholder.model';

@Component({
  selector: 'lib-newsletter-editor',
  template: '<div id="gjs"></div>'
})
export class NgxNewsletterEditorComponent extends NgxEditorComponent implements OnInit {

  @Input() placeholders: Placeholder[] = [];

  private editor: NewsletterEditor | undefined;
  private newsletterConfig: Partial<NewsletterConfig> = {
    container: '#gjs',
    plugins: ['gjs-preset-newsletter'],
    pluginsOpts: {
      'gjs-preset-newsletter': {
        modalTitleImport: 'Import template'
      }
    },
    parser: {
      parserHtml: {}
    }
  };

  constructor(private ngxNewsletterEditorService: NgxNewsletterEditorService) {
    super();
  }

  ngOnInit() {

    // setup the default parser. It can be overriden by providing a custom implementation of the ngxNewsletterEditorService
    if (this.newsletterConfig.parser) {
      this.newsletterConfig.parser.parserHtml = this.ngxNewsletterEditorService?.parserHtml;
    }

    this.editor = this.setup(this.newsletterConfig);

    this.editor?.Panels?.addButton('options', [
      {
        id: 'undo',
        className: 'fa fa-undo',
        command: this.undo,
        attributes: {
          title: 'Undo'
        }
      },
      {
        id: 'redo',
        className: 'fa fa-repeat icon-redo',
        command: this.redo,
        attributes: {
          title: 'Redo'
        }
      }
    ]);

    if (this.placeholders.length) {
      const placeholderSelectOptions = this.placeholders.map(placeholder =>
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
      this.editor.RichTextEditor?.add('placeholders', {
        icon: `<select class="gjs-field gjs-two-color">
                <option class="gjs-one-color" value="">- Select placeholder -</option>
                ${placeholderSelectOptions}
              </select>`,
        event: 'change',
        result: (rte: TextEditor, action: TextAction) => rte.insertHTML(action.btn.firstChild.value),
        update: (_: TextEditor, action: TextAction) => action.btn.firstChild.value = ''
      });
    }
  }

  getRawHtml(): string | undefined {
    return this.editor?.runCommand?.('gjs-get-inlined-html');
  }

  private undo = (editor: NewsletterEditor, sender: CommandSender) => {
    sender.set('active', 0);
    editor.UndoManager?.undo(1);
  };

  private redo = (editor: NewsletterEditor, sender: CommandSender) => {
    sender.set('active', 0);
    editor.UndoManager?.redo(1);
  };

}
