import { COLORS } from "./helpers/colors.ts";

class DrawingMemento {
  private shapes: string[];

  constructor(shapes: string[]) {
    this.shapes = [...shapes];
  }

  public getShapes(): string[] {
    return [...this.shapes];
  }
}

class DrawingBoard {
  private shapes: string[] = [];

  public addShape(shape: string): void {
    this.shapes.push(shape);
    console.debug(`Shape added: ${shape}`);
  }

  public showBoard(): void {
    console.debug("Current board:", this.shapes.join(", ") || "Empty");
  }

  public save(): DrawingMemento {
    return new DrawingMemento(this.shapes);
  }

  public restore(memento: DrawingMemento): void {
    this.shapes = memento.getShapes();
    console.debug("%c\nBoard state restored.", COLORS.blue);
  }
}

class History {
  private mementos: DrawingMemento[] = [];

  public push(memento: DrawingMemento): void {
    this.mementos.push(memento);
  }

  public pop(): DrawingMemento | undefined {
    return this.mementos.pop();
  }
}

function main(): void {
  const drawingBoard: DrawingBoard = new DrawingBoard();
  const history: History = new History();

  drawingBoard.addShape("Circle");
  history.push(drawingBoard.save());

  drawingBoard.addShape("Square");
  history.push(drawingBoard.save());

  drawingBoard.addShape("Triangle");
  drawingBoard.showBoard();

  drawingBoard.restore(history.pop()!);
  drawingBoard.showBoard();

  drawingBoard.restore(history.pop()!);
  drawingBoard.showBoard();
}

main();
