import { COLORS } from "./helpers/colors.ts";

class BulletType {
  private name: string;
  private damage: number;
  private color: string;

  public constructor(name: string, damage: number, color: string) {
    this.name = name;
    this.damage = damage;
    this.color = color;
  }

  public getName(): string {
    return this.name;
  }

  public getDamage(): number {
    return this.damage;
  }

  public getColor(): string {
    return this.color;
  }
}

// BulletTypeFactory
class BulletTypeFactory {
  private bulletTypes: Record<string, BulletType> = {};

  public getBulletType(
    name: string,
    damage: number,
    color: string
  ): BulletType {
    const keyBulletType: string = `${name}-${damage}-${color}`;
    if (!this.bulletTypes[keyBulletType]) {
      console.debug(
        `Creating new BulletType: ${name}, Damage: ${damage}, Color: ${color}`
      );
      this.bulletTypes[keyBulletType] = new BulletType(name, damage, color);
    }

    return this.bulletTypes[`${name}-${damage}-${color}`];
  }
}

class Bullet {
  private x: number;
  private y: number;
  private direction: number;
  private bulletType: BulletType;

  public constructor(
    x: number,
    y: number,
    direction: number,
    bulletType: BulletType
  ) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.bulletType = bulletType;
  }

  public display(): void {
    const text = `
      Bullet type: %c"${this.bulletType.getName()}" 
      %cCoords: (${this.x}, ${this.y})
      Direction ${this.direction}
      Damage: ${this.bulletType.getDamage()} 
      Color: ${this.bulletType.getColor()}
    `;

    console.debug(text, COLORS.green, COLORS.white);
  }
}

class ShootingSystem {
  private bullets: Bullet[] = [];
  private factory: BulletTypeFactory;

  public constructor(factory: BulletTypeFactory) {
    this.factory = factory;
  }

  public shoot(
    x: number,
    y: number,
    direction: number,
    type: string,
    damage: number,
    color: string
  ): void {
    const bulletType: BulletType = this.factory.getBulletType(
      type,
      damage,
      color
    );
    const bullet: Bullet = new Bullet(x, y, direction, bulletType);
    this.bullets.push(bullet);
    bullet.display();
  }

  public getBulletCount(): number {
    return this.bullets.length;
  }
}

function main() {
  const factory: BulletTypeFactory = new BulletTypeFactory();
  const shootingSystem: ShootingSystem = new ShootingSystem(factory);

  shootingSystem.shoot(10, 20, 0, "Pistol", 10, "Gray");
  shootingSystem.shoot(15, 25, 90, "Shotgun", 20, "Red");
  shootingSystem.shoot(20, 30, 180, "Rifle", 15, "Green");
  shootingSystem.shoot(10, 20, 45, "Pistol", 10, "Gray");
  shootingSystem.shoot(25, 35, 270, "Shotgun", 20, "Red");

  console.debug(
    `Bullet count: %c${shootingSystem.getBulletCount()}\n`,
    COLORS.yellow
  );
}

main();
