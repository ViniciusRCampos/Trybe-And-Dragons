import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;
  
  constructor(name: string, energyType: EnergyType = 'mana') {
    super(name);
    this._energyType = energyType;
    Mage.instances += 1;
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}

export default Mage;