import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints: number;
  private static readonly MAX_LIFE_POINTS = 80;
  static numberOfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = Dwarf.MAX_LIFE_POINTS;
    Dwarf.numberOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.numberOfInstances;
  }
}
