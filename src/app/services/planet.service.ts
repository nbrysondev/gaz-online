import { Injectable } from '@angular/core';
import { EntityService } from '.';
import { Planet, PlanetContent, Position } from '../models';

@Injectable()
export class PlanetService extends EntityService {

  protected entities: Array<Planet>;

  private _maxPlanets: number;
  get maxPlanets(): number {
    return this._maxPlanets;
  }

  private planetPositions: Array<Position>;

  constructor() {
    super();
    this._maxPlanets = 7;
    // Configure enough positions for 7 planets
    this.planetPositions = [
      { x: 50,  y: 50 },
      { x: 350, y: 100 },
      { x: 900, y: 20 },
      { x: 100, y: 400 },
      { x: 650, y: 250 },
      { x: 550, y: 550 },
      { x: 900, y: 500 }
    ];
  }

  /**
  * Replaces an entity with another entity
  *
  * @function replace
  */
  public replace(oldPlanet: Planet, newPlanet: PlanetContent) {
    // Add the planet the player has chosen to the selected planets array
    this.entities = this.entities.map(
      entity => entity === oldPlanet ? this.create(newPlanet, oldPlanet.position) : entity 
    );
  }

  /**
  * Creates a new Planet from a PlanetContent instance.
  * Throws an exception if no planet position is available.
  *
  * @function create
  * @param company {PlanetContent}
  * @return {Planet}
  */
  protected create(planet: PlanetContent, position?: Position): Planet {

    if (!position) {
      if (this.planetPositions.hasOwnProperty(this.entities.length)) {
        position = this.planetPositions[this.entities.length];
      } else {
        throw new Error('Unable to set planet position - index: ' + this.entities.length);
      }
    }

    return Object.assign(
      planet,
      {
        commodities: [],
        position: position
      }
    )
  }
}
