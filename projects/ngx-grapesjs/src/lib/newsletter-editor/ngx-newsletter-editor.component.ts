import { Component, Input, OnInit } from '@angular/core';

import { CommandSender, NewsletterConfig, NewsletterEditor, TextAction, TextEditor } from './newsletter-editor.model';
import { NgxNewsletterEditorService } from './ngx-newsletter-editor.service';
import { Placeholder } from './placeholder.model';

declare var grapesjs: {
  init(options: any): {}
};

@Component({
  selector: 'lib-newsletter-editor',
  template: '<div id="gjs"></div>'
})
export class NgxNewsletterEditorComponent implements OnInit {

  @Input()
  set template(content: string) {
    this.config.components = content;
  }
  @Input() placeholders: Placeholder[] = [];
  @Input()
  set storagePrefix(prefix: string) {
    this.config.storageManager.id = prefix;
  }

  private editor: NewsletterEditor | undefined = undefined;
  private config: NewsletterConfig = {
    container: '#gjs',
    plugins: ['gjs-preset-newsletter'],
    components: '',
    pluginsOpts: {
      'gjs-preset-newsletter': {
        modalTitleImport: 'Import template'
      }
    },
    parser: {
      parserHtml: {}
    },
    storageManager: {
      id: 'gjs-'
    }
  };

  constructor(private ngxNewsletterEditorService: NgxNewsletterEditorService) { }

  ngOnInit(): void {
    // setup the default parser. It can be overriden by providing a custom implementation of the ngxNewsletterEditorService
    this.config.parser.parserHtml = this.ngxNewsletterEditorService?.parserHtml;
    // initialize the editor
    this.editor = grapesjs.init(this.config);

    // add undo/redo commands
    this.editor.Panels?.addButton('options', [
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
