interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): void;
}

abstract class AbstractBaseHandler implements Handler {
  private nextHandler: Handler | null = null;
  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }
  public handle(request: string): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

class BasicSupport extends AbstractBaseHandler {
  public override handle(request: string): void {
    if (request === "basic") {
      console.debug("Basic Support: Resolving issues");
      return;
    }

    console.debug(
      "Basic Support: We can not handler this issue. Pass to Advance support"
    );
    super.handle(request);
  }
}
