import { COLORS } from "./helpers/colors.ts";

interface Room {
  enter(player: Player): void;
}

class Player {
  public name: string;
  public level: number;

  public constructor(nameInput: string, levelInput: number) {
    this.name = nameInput;
    this.level = levelInput;
  }
}

class SecretRoom implements Room {
  public enter(player: Player): void {
    console.debug(
      `%c${player.name} enters the secret room. Welcome!!`,
      COLORS.green
    );
  }
}

class MagicPortalProxy implements Room {
  private secretRoom: Room;

  public constructor(room: Room) {
    this.secretRoom = room;
  }

  public enter(player: Player): void {
    if (player.level >= 10) {
      this.secretRoom.enter(player);
      return;
    }

    console.debug(
      `%c${player.name} is not allowed to enter the secret room.`,
      COLORS.red
    );
  }
}

function main() {
  const portal: MagicPortalProxy = new MagicPortalProxy(new SecretRoom());
  const player01 = new Player("Player 01", 5);
  const player02 = new Player("Player 02", 15);

  console.debug("%c--- Proxy Pattern ---", COLORS.yellow);
  console.debug(
    "%cPlayer 01 (level 5) tries to enter the secret room.",
    COLORS.cyan
  );
  portal.enter(player01);

  console.debug(
    "%cPlayer 02 (level 15) tries to enter the secret room.",
    COLORS.cyan
  );
  portal.enter(player02);
}

main();
