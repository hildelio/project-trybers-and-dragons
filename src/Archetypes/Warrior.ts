import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  public energyType: EnergyType;
  private static readonly ENERGY_TYPE = 'stamina';
  static numberOfInstances = 0;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = Warrior.ENERGY_TYPE;
    Warrior.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.numberOfInstances;
  }
}