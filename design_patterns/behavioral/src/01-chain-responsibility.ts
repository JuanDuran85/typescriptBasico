import { COLORS } from "./helpers/colors.ts";

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
      console.debug("Basic Support: %cResolving issues", COLORS.green);
      return;
    }

    console.debug(
      "Basic Support: %cWe can not handler this issue. Pass to Advance support",
      COLORS.red
    );
    super.handle(request);
  }
}

class AdvancedSupport extends AbstractBaseHandler {
  public override handle(request: string): void {
    if (request === "advanced") {
      console.debug("Advanced Support: %cResolving issues", COLORS.yellow);
      return;
    }

    console.debug(
      "Advanced Support: %cWe can not handler this issue. Pass to Next support (Expert)",
      COLORS.red
    );
    super.handle(request);
  }
}

class ExpertSupport extends AbstractBaseHandler {
  public override handle(request: string): void {
    if (request === "expert") {
      console.debug("Expert Support: %cResolving issues", COLORS.blue);
      return;
    }

    console.debug(
      "Expert Support: %cWe can not handler this issue. We are sorry",
      COLORS.red
    );
    super.handle(request);
  }
}

function main() {
  const basicSupport: BasicSupport = new BasicSupport();
  const advancedSupport: AdvancedSupport = new AdvancedSupport();
  const expertSupport: ExpertSupport = new ExpertSupport();

  basicSupport.setNext(advancedSupport).setNext(expertSupport);
  basicSupport.handle("expert");
}

main();