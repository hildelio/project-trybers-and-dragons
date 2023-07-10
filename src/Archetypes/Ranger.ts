import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  public energyType: EnergyType;
  private static readonly ENERGY_TYPE = 'stamina';
  static numberOfInstances = 0;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this.energyType = Ranger.ENERGY_TYPE;
    Ranger.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.numberOfInstances;
  }
}