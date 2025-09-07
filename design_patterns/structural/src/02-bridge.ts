import { COLORS } from "./helpers/colors.ts";
interface Ability {
  use(): void;
}

class SwordAttack implements Ability {
  public use(): void {
    console.debug("%cAttacking with a sword", COLORS.red);
  }
}

class MagicSpell implements Ability {
  public use(): void {
    console.debug("%cCasting a magic spell", COLORS.blue);
  }
}

abstract class Character {
  protected ability: Ability;

  public constructor(abilityIn: Ability) {
    this.ability = abilityIn;
  }

  public setAbility(abilityIn: Ability): void {
    this.ability = abilityIn;
  }

  abstract performAbility(): void;
}

class PrincipalWarriorActor extends Character {
  override performAbility(): void {
    console.debug("Warrior performing ability...");
    this.ability.use();
  }
}
