import Race from './Race';

export default class Orc extends Race {
  public maxLifePoints: number;
  private static readonly MAX_LIFE_POINTS = 74;
  static numberOfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = Orc.MAX_LIFE_POINTS;
    Orc.numberOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.numberOfInstances;
  }
}
