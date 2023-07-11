import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    private monsters: Fighter[] | SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.areMonstersAlive()) {
      const aliveMonsters = this.monsters
        .filter((monster) => monster.lifePoints > 0);

      aliveMonsters.forEach((monster) => {
        this.attackRound(this.player, monster);
      });
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  private attackRound(attacker: Fighter, defender: SimpleFighter): void {
    attacker.attack(defender);
    defender.attack(this.player);
  }

  private areMonstersAlive(): boolean {
    return this.monsters.some((monster) => monster.lifePoints > 0);
  }
}
