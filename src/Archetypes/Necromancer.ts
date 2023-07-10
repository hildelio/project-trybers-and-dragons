import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public energyType: EnergyType;
  private static readonly ENERGY_TYPE = 'mana';
  static numberOfInstances = 0;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = Necromancer.ENERGY_TYPE;
    Necromancer.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.numberOfInstances;
  }
}