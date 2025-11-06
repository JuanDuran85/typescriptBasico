import { COLORS } from "./helpers/colors.ts";

abstract class RoomCleaning {
  public cleanRoom(): void {
    this.enterRoom();
    this.collectTrash();
    this.specificCleaning();
    this.disinfectSurfaces();
    this.exitRoom();

    console.debug("%cCleaning finished.\n", COLORS.green);
  }

  private enterRoom(): void {
    console.debug("Entering the room...");
  }

  private collectTrash(): void {
    console.debug("Collecting the trash...");
  }

  private disinfectSurfaces(): void {
    console.debug("Disinfecting surfaces...");
  }

  private exitRoom(): void {
    console.debug("Exiting the room and marking it as clean.");
  }

  protected abstract specificCleaning(): void;
}

class HotelRoomCleaning extends RoomCleaning {
  protected override specificCleaning(): void {
    console.debug("Making beds and restocking bathroom supplies.");
  }
}

class ConferenceRoomCleaning extends RoomCleaning {
  protected override specificCleaning(): void {
    console.debug("Cleaning tables and organizing chairs.");
  }
}

class OfficeCleaning extends RoomCleaning {
  protected override specificCleaning(): void {
    console.debug("Cleaning desks and organizing documents.");
  }
}

function main(): void {
  console.debug("%cCleaning a hotel room:", COLORS.blue);
  const hotelRoom: HotelRoomCleaning = new HotelRoomCleaning();
  hotelRoom.cleanRoom();

  console.debug("%cCleaning a conference room:", COLORS.purple);
  const conferenceRoom: ConferenceRoomCleaning = new ConferenceRoomCleaning();
  conferenceRoom.cleanRoom();

  console.debug("%cCleaning an office:", COLORS.orange);
  const office: OfficeCleaning = new OfficeCleaning();
  office.cleanRoom();
}

main();
