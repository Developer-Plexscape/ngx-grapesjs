import { Config } from '../editor.model';

export interface NewsletterEditor {
  Panels?: Panels;
  RichTextEditor?: TextEditor;
  runCommand?(command: string): string;
  UndoManager?: {
    undo(moves: number): void;
    redo(moves: number): void;
  };
}

interface Panels {
  addButton(name: string, panels: Panel[]): void;
}

export interface TextEditor {
  add(name: string, option: TextOption): void;
  insertHTML(value: string): void;
}

export interface Panel {
  id: string;
  className: string;
  command: (editor: NewsletterEditor, sender: CommandSender) => void;
  attributes: {
    title: string;
  };
}

interface TextOption {
  icon: string;
  event: string;
  result: (rte: TextEditor, action: TextAction) => void;
  update: (rte: TextEditor, action: TextAction) => void;
}

export interface TextAction {
  btn: {
    firstChild: {
      value: string;
    };
  };
}

export interface NewsletterConfig extends Config {
  parser: {
    parserHtml: object;
  };
}

export interface CommandSender {
  set(name: string, value: number): void;
}
