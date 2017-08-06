import { Injectable } from '@angular/core';
import { EntityService } from '.';
import { Planet, PlanetContent } from '../models';

@Injectable()
export class PlanetService extends EntityService {

  protected entities: Array<Planet>;

  public hasPlanets() {
    if (this.entities) {
      return this.entities.length > 0;
    } else {
      return false;
    }
  }

  /**
  * Creates a new Planet from a PlanetContent instance
  *
  * @function create
  * @param company {PlanetContent}
  * @return {Planet}
  */
  protected create(planet: PlanetContent): Planet {
    return Object.assign(
      planet,
      {
        marketStrength: 0,
        netWorth: 0,
        ship: null,
        planet: null,
        commodities: [],
        player: null
      }
    )
  }

}
