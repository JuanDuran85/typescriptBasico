import { COLORS } from './helpers/colors.ts';

class CodeEditorState {
    public readonly content: string;
    public readonly cursorPosition: number;
    public readonly unsavedChanges: boolean;


    public constructor(content: string, cursorPosition: number, unsavedChanges: boolean) {
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsavedChanges = unsavedChanges;
    }

    public copyWith({ content, cursorPosition, unsavedChanges }: Partial<CodeEditorState>) {
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedChanges ?? this.unsavedChanges
        );
    }

    public displayState() {
        console.log("%c------------------------------------------", COLORS.red);
        console.log("%cEditor Content State", COLORS.red);
        console.log(`
            Content: ${this.content}
            Cursor Position: ${this.cursorPosition}
            Unsaved Changes: ${this.unsavedChanges}
        `);
        console.log("%c------------------------------------------", COLORS.red);
    }
}

class CodeEditorHistory {
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    public save(state: CodeEditorState): void {
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.splice(0, this.currentIndex + 1);
        }

        this.history.push(state);
        this.currentIndex++;
    }

    public undo(): CodeEditorState | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }

        return null;
    }

    public redo(): CodeEditorState | null {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }

        return null;
    }
}

function main() {
    const history: CodeEditorHistory = new CodeEditorHistory();

    console.log("-------------------------------------------------");
    console.log("%cAfter first state", COLORS.purple);
    let editorState: CodeEditorState = new CodeEditorState("console.log('new state to use...')", 2, false);
    history.save(editorState);
    editorState.displayState();
    console.log("-------------------------------------------------");
    
    console.log("\n-------------------------------------------------");
    console.log("%cAfter second state", COLORS.green);
    editorState = editorState.copyWith({
        content: "console.log('new state to use...'); \nconsole.log('Another new state')",
        cursorPosition: 3,
        unsavedChanges: true,
    });
    history.save(editorState);
    editorState.displayState();
    console.log("-------------------------------------------------");
    
    console.log("\n-------------------------------------------------");
    console.log("%cAfter Third State Change", COLORS.green);
    editorState = editorState.copyWith({
        cursorPosition: 5,
    });
    history.save(editorState);
    editorState.displayState();
    console.log("-------------------------------------------------");
    
    console.log("\n-------------------------------------------------");
    console.log("%cUsing Undo", COLORS.yellow);
    editorState = history.undo()!;
    editorState.displayState();
    console.log("-------------------------------------------------");
    
    console.log("\n-------------------------------------------------");
    console.log("%cUsing Redo", COLORS.pink);
    editorState = history.redo()!;
    editorState.displayState();
    console.log("-------------------------------------------------");
}

main();