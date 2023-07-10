import Race from './Race';

export default class Halfling extends Race {
  public maxLifePoints: number;
  private static readonly MAX_LIFE_POINTS = 60;
  static numberOfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = Halfling.MAX_LIFE_POINTS;
    Halfling.numberOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.numberOfInstances;
  }
}
