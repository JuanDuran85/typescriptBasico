(() => {
  type HtmlType = "input" | "select" | "textarea" | "radio";

  interface HtmlElementsProperties {
    id: string;
    type: HtmlType;
  }

  interface InputAttributesProperties {
    value: string;
    placeholder: string;
  }

  interface InputEventsProperties {
    setFocus: () => void;
    getValue: () => void;
    isActive: () => void;
    removeValue: () => void;
  }

  interface InputElementsProperties {
    htmlElement: HtmlElementsProperties;
    inputAttributes: InputAttributesProperties;
  }

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {
      console.log("Focus - setFocus");
    }
    getValue() {
      console.log("Focus - getValue");
    }
    isActive() {
      console.log("Focus - isActive");
    }
    removeValue() {
      console.log("Focus - removeValue");
    }
  }

  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    constructor({
      htmlElement: { id, type },
      inputAttributes: { value, placeholder },
    }: InputElementsProperties) {
      this.htmlElement = new HtmlElement(id, type);
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }

  const newInputElement = new InputElement({
    htmlElement: { id: "1", type: "input" },
    inputAttributes: { value: "value", placeholder: "placeholder" },
  });

  console.log({ newInputElement });
})();
