import { Injectable } from '@angular/core';
import { Planet, Ship, Commodity, Company } from '../models';

interface GameState {
  planets: Array<Planet>,
  ships: Array<Ship>,
  commodities: Array<Commodity>,
  companies: Array<Company>
}


@Injectable()
export class GameStateService {

  private gameState: GameState;

  constructor() { }

  
}
