import { Component, Input, OnInit } from '@angular/core';

import { CommandSender, Config, GrapesJsEditor, TextAction, TextEditor } from './grapesjs.model';
import { NgxGrapesjsService } from './ngx-grapesjs.service';
import { Placeholder } from './placeholder.model';

declare var grapesjs: {
  init(options: any): {}
};

@Component({
  selector: 'lib-ngx-grapesjs',
  template: '<div id="gjs"></div>'
})
export class NgxGrapesjsComponent implements OnInit {

  @Input()
  set template(content: string) {
    this.config.components = content;
  }
  @Input() placeholders: Placeholder[] = [];

  private editor: GrapesJsEditor | undefined = undefined;
  private config: Config = {
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
    }
  };

  constructor(private ngxGrapesJsService: NgxGrapesjsService) { }

  ngOnInit(): void {
    // setup the default parser. It can be overriden by providing a custom implementation of the NgxGrapesjsService
    this.config.parser.parserHtml = this.ngxGrapesJsService?.parserHtml;

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

  private undo = (editor: GrapesJsEditor, sender: CommandSender) => {
    sender.set('active', 0);
    editor.UndoManager?.undo(1);
  };

  private redo = (editor: GrapesJsEditor, sender: CommandSender) => {
    sender.set('active', 0);
    editor.UndoManager?.redo(1);
  };

}
