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
      const iconImage = `icon-${type}.png`;
      this.icons[type] = new LocationIcon(type, iconImage);
    }

    return this.icons[type];
  }
}
