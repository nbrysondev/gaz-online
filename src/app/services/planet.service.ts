import { Injectable } from '@angular/core';
import { Planet, PlanetContent } from '../models';


@Injectable()
export class PlanetService {

  private planets: Array<Planet>;

  constructor() { }

  public get(slug: string): Planet {
    let planets = this.planets.filter(planet => slug === planet.slug);
    return planets[0];
  }

  public getAll(): Array<Planet> {
    return this.planets;
  }

  public add(planet: PlanetContent) {
    this.planets.push(planet);
  }

  public addMultiple(planets: Array<PlanetContent>) {
    this.planets.concat(planets);
  }

  public replace(oldPlanet: Planet, newPlanet: Planet) {
    // Add the planet the player has chosen to the selected planets array
    this.planets = this.planets.map(
      planet => planet === oldPlanet ? newPlanet : planet 
    );
  }

  public clear() {
    this.planets = [];
  }

  public hasPlanets() {
    if (this.planets) {
      return this.planets.length > 0;
    } else {
      return false;
    }
  }

}
