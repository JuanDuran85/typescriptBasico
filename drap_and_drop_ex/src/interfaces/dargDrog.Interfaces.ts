namespace App {
  export interface Draggable {
    /**
     * @description: Handler lisenert start event
     * @param event
     */
    dragStartHandler(event: DragEvent): void;
    /**
     * @description: Handler lisenert end event
     * @param event
     */
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    /**
     * @description: drag controller
     * @param event
     */
    dragOverHandler(event: DragEvent): void;
    /**
     * @description: react to the atual drog happened
     * @param event
     */
    dropHandler(event: DragEvent): void;
    /**
     * @description: revert a visual UI
     * @param event
     */
    dragLeaveHandler(event: DragEvent): void;
  }
}
