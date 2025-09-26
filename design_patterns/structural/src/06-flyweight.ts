import { COLORS } from "./helpers/colors.ts";

interface Location {
  display(coordinates: { x: number; y: number }): void;
}

class LocationIcon implements Location {
  private type: string;
  private iconImage: string;

  public constructor(type: string, iconImage: string) {
    this.type = type;
    this.iconImage = iconImage;
  }

  public display(coordinates: { x: number; y: number }): void {
    console.debug(
      `
        Displaying ${this.type} icon at (${coordinates.x}, ${coordinates.y}) with image %c[${this.iconImage}]    
    `,
      COLORS.blue
    );
  }
}

class LocationFlyWeightFactory {
  private icons: Record<string, LocationIcon> = {};

  public getLocationIcon(type: string): LocationIcon {
    if (!this.icons[type]) {
      console.debug(`%cCreating new icon of type: ${type}`, COLORS.red);
      const iconImage = `icon-${type}.png`;
      this.icons[type] = new LocationIcon(type, iconImage);
    }

    return this.icons[type];
  }
}

class MapLocation {
  private coordinates: { x: number; y: number };
  private icon: LocationIcon;

  public constructor(x: number, y: number, icon: LocationIcon) {
    this.coordinates = { x, y };
    this.icon = icon;
  }

  public display(): void {
    this.icon.display(this.coordinates);
  }
}

function main() {
  const factory: LocationFlyWeightFactory = new LocationFlyWeightFactory();

  const locations: MapLocation[] = [
    new MapLocation(10, 20, factory.getLocationIcon("hospital")),
    new MapLocation(43, 45, factory.getLocationIcon("hospital")),
    new MapLocation(23,67, factory.getLocationIcon("school")),
    new MapLocation(56,78, factory.getLocationIcon("school")),
    new MapLocation(34,89, factory.getLocationIcon("restaurant")),
    new MapLocation(90,12, factory.getLocationIcon("restaurant")),
    new MapLocation(11,22, factory.getLocationIcon("restaurant")),
  ];

  locations.forEach((location: MapLocation) => location.display());
}

main();
