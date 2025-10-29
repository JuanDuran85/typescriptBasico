import { COLORS } from "./helpers/colors.ts";

interface Command {
  execute(): void;
}

class TextEditor {
  private text: string = "";
  private clipboard: string = "";
  private history: string[] = [];

  public type(text: string): void {
    this.history.push(this.text);
    this.text += text;
  }

  public copy(): void {
    this.clipboard = this.text;
    console.debug(
      `Text copied to clipboard: \n%c"${this.clipboard}"`,
      COLORS.blue
    );
  }

  public paste(): void {
    this.history.push(this.text);
    this.text += this.clipboard;
    console.debug(`Text after pasting: \n%c"${this.text}"`, COLORS.blue);
  }

  public undo(): void {
    if (this.history.length > 0) {
      this.text = this.history.pop() as string;
      console.debug(`Text after undoing: \n%c"${this.text}"`, COLORS.blue);
      return;
    }

    console.debug("Nothing to undo.");
  }

  public getText(): string {
    return this.text;
  }
}

class CopyCommand implements Command {
  constructor(private editor: TextEditor) {}

  public execute(): void {
    this.editor.copy();
  }
}

class PasteCommand implements Command {
  constructor(private editor: TextEditor) {}

  public execute(): void {
    this.editor.paste();
  }
}

class UndoCommand implements Command {
  constructor(private editor: TextEditor) {}

  public execute(): void {
    this.editor.undo();
  }
}

class Toolbar {
  private commands: Record<string, Command> = {};

  public setCommand(button: string, command: Command): void {
    this.commands[button] = command;
    console.debug(`Command assigned to button "${button}"`);
  }

  public clickButton(button: string): void {
    if (this.commands[button]) {
      this.commands[button].execute();
      return;
    }
    console.error(`No command assigned to button "${button}"`);
  }
}

function main() {
  const editor: TextEditor = new TextEditor();
  const toolbar: Toolbar = new Toolbar();

  const copyCommand: CopyCommand = new CopyCommand(editor);
  const pasteCommand: PasteCommand = new PasteCommand(editor);
  const undoCommand: UndoCommand = new UndoCommand(editor);

  toolbar.setCommand("copy", copyCommand);
  toolbar.setCommand("paste", pasteCommand);
  toolbar.setCommand("undo", undoCommand);

  editor.type("H");
  editor.type("o");
  editor.type("l");
  editor.type("a");
  editor.type(" ");
  editor.type("M");
  editor.type("u");
  editor.type("n");
  editor.type("d");
  editor.type("o");
  editor.type("!");
  console.debug(`Current text: %c"${editor.getText()}"`, COLORS.green);

  console.debug("\nCopying text:");
  toolbar.clickButton("copy");

  console.debug("\nPasting text:");
  toolbar.clickButton("paste");

  console.debug("\nUndoing the last action:");
  toolbar.clickButton("undo");

  console.debug("\nUndoing again:");
  toolbar.clickButton("undo");

  console.debug(`\nFinal text: "${editor.getText()}"`);
}

main();
