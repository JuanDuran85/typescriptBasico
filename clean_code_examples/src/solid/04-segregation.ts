interface EatingBird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwingingBird {
  swing(): void;
}

class Toucan implements EatingBird, FlyingBird {
  fly(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

class Hummingbird implements EatingBird, FlyingBird {
  fly(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

class Ostrich implements EatingBird, RunningBird {
  eat(): void {
    throw new Error("Method not implemented.");
  }
  run(): void {
    throw new Error("Method not implemented.");
  }
}

class Penguin implements EatingBird, SwingingBird {
  swing(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
  swim(): void {
    throw new Error("Method not implemented.");
  }
}
