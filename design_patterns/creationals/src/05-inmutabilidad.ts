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

    public redo(): CodeEditorState | null | undefined {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }

        return null;
    }

}