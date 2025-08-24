class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance() {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
      console.log("Creating new instance of DragonBalls");
    }
    return DragonBalls.instance;
  }

  public collectBall() {
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(`You have collected ${this.ballsCollected} Dragon Ball(s).`);
      return;
    }

    console.log("You have collected all 7 Dragon Balls!");
  }

  public summonShenlong() {
    if (this.ballsCollected === 7) {
      console.log("Shenlong has been summoned!");
      this.ballsCollected = 0;
      return;
    }

    console.log(
      `You need to collect all 7 Dragon Balls first!. You currently have ${
        this.ballsCollected
      }. So, you need to collect ${7 - this.ballsCollected} more.`
    );
  }
}

function main() {
  const gokuDragonBalls = DragonBalls.getInstance();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.summonShenlong();

  const vegetaDragonBalls = DragonBalls.getInstance();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.summonShenlong();

  gokuDragonBalls.summonShenlong();
  vegetaDragonBalls.summonShenlong();
}

main();
