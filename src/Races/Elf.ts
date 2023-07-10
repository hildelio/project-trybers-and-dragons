import Race from './Race';

export default class Elf extends Race {
  public maxLifePoints: number;
  private static readonly MAX_LIFE_POINTS = 99;
  static numberOfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = Elf.MAX_LIFE_POINTS;
    Elf.numberOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.numberOfInstances;
  }
}
