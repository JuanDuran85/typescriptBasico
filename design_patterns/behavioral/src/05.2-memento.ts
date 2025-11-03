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
    // TODO: Implementar el método save para guardar el estado actual
    throw new Error("Method not implemented.");
  }

  // Restaurar el estado de la pizarra desde un Memento
  public restore(memento: DrawingMemento): void {
    this.shapes = memento.getShapes();
    console.debug("%c\nBoard state restored.", COLORS.blue);
  }
}

// Clase Caretaker - History
class History {
  private mementos: DrawingMemento[] = [];

  // Guardar un Memento
  // TODO: Implementar push para guardar en la historia
  public push(memento: DrawingMemento): void {
    throw new Error("Method not implemented.");
  }

  // Recuperar el último Memento
  // TODO: Implementar pop para recuperar el último memento
  public pop(): DrawingMemento | undefined {
    throw new Error("Method not implemented.");
  }
}

function main(): void {
  const drawingBoard = new DrawingBoard();
  const history = new History();

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
