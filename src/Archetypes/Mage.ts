import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public energyType: EnergyType;
  private static readonly ENERGY_TYPE = 'mana';
  static numberOfInstances = 0;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = Mage.ENERGY_TYPE;
    Mage.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.numberOfInstances;
  }
}