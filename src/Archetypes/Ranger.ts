import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;
  
  constructor(name: string, energyType: EnergyType = 'stamina') {
    super(name);
    this._energyType = energyType;
    Ranger.instances += 1;
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}

export default Ranger;