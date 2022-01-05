export interface GrapesJsEditor {
  Panels?: Panels;
  RichTextEditor?: TextEditor;
  Commands?: Commands;
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

interface Commands {
  add(name: string, callback: Function): void;
}

export interface Panel {
  id: string;
  className: string;
  command: Function;
  attributes: {
    title: string;
  };
}

interface TextOption {
  icon: string;
  event: string;
  result: Function;
  update: Function;
}

export interface TextAction {
  btn: {
    firstChild: {
      value: string;
    };
  };
}

export interface Config {
  container: string;
  plugins: string[];
  components: string;
  pluginsOpts: Record<string, any>;
  parser: {
    parserHtml: {}
  };
}

export interface CommandSender {
  set(name: string, value: number): void
}
