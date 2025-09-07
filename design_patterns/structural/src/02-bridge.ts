import { COLORS } from "./helpers/colors.ts";
interface Ability {
  use(): void;
}

class SwordAttack implements Ability {
  public use(): void {
    console.debug("%cAttacking with a sword", COLORS.red);
  }
}

class FireballSpell implements Ability {
  public use(): void {
    console.debug("%cCasting a fireball spell", COLORS.yellow);
  }
}

class MagicSpell implements Ability {
  public use(): void {
    console.debug("%cCasting a magic spell", COLORS.blue);
  }
}

class AxeAttack implements Ability {
  public use(): void {
    console.debug("%cAttacking with an axe", COLORS.green);
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

class MageActor extends Character {
  override performAbility(): void {
    console.debug("Mage performing ability...");
    this.ability.use();
  }
}

function main() {
  const warriorActor: PrincipalWarriorActor = new PrincipalWarriorActor(
    new SwordAttack()
  );

  warriorActor.performAbility();
  warriorActor.setAbility(new MagicSpell());
  warriorActor.performAbility();
  warriorActor.setAbility(new AxeAttack());
  warriorActor.performAbility();
  console.debug("\n");

  const mageActor = new MageActor(new AxeAttack());
  mageActor.performAbility();
  mageActor.setAbility(new MagicSpell());
  mageActor.performAbility();
  mageActor.setAbility(new FireballSpell());
  mageActor.performAbility();
  console.debug("\n");
}

main();
