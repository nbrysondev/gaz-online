import { Injectable } from '@angular/core';
import { CompanyService, PlanetService, GameSettingsService } from '.';
import { Company, Planet, GameSettings } from '../models';
import { Router } from '@angular/router';

interface GameState {
  companies: Array<Company>;
  planets: Array<Planet>;
  settings: GameSettings;
}
@Injectable()
export class GameStateService {

  private static readonly namespace = 'OpenGaz';
  private week: number;
  private currentPlayer: number;

  constructor(
    private companyService: CompanyService,
    private planetService: PlanetService,
    private gameSettings: GameSettingsService,
    private router: Router
  ) {
    this.week = 0;
    this.currentPlayer = 0;
  }

  /**
  * Gets the current player.
  *
  * @function getCurrentPlayer
  * @returns {Company}
  */
  public getCurrentPlayer(): Company {
    return this.companyService.get(this.currentPlayer);
  }

  /**
  * Sets current player to the next company in the companies array
  *
  * @function nextPlayer
  * @returns {Company}
  */
  public nextPlayer(): Company {
    const company = this.companyService.get(++this.currentPlayer);
    if (company) {
      return company;
    } else {
      this.currentPlayer = 0;
      this.nextWeek();
      return this.companyService.get(0);
    }
  }

  /**
  * Initiaites everything required to start the game
  *
  * @function setup
  * @returns {Company}
  */
  public setup() {
    const company = this.companyService.getCompanyWithoutShip();

    if (company) {
      // Check if this is a player company
      if (company.player > 0) {
        // Route to ship select menu
        this.router.navigate(['new/select-ship']);
      } else {
        // AI player - randomly select a ship
        this.companyService.allocateRandomShip(company);
        this.setup();
      }
      this.currentPlayer++;
    } else {
      // All set...start the game.
      this.currentPlayer = 0;
      this.router.navigate(['game/new-week']);
    }

  }

  /**
  *
  * @function getWeek
  * @returns {string}
  */
  public getWeek() {
    return this.week;
  }

  /**
  *
  * @function nextWeek
  * @returns {string}
  */
  public nextWeek() {
    this.week++;
  }

  /**
  * Saves all game data to browser localstorage
  *
  * @function save
  * @param slot {number}
  */
  public save(slot?: number) {
    const games = this.getSavedGames();
    if (slot == null) {
      games.push(this.getStateObject());
    } else {
      games[slot] = this.getStateObject();
    }
    localStorage.setItem(GameStateService.namespace , JSON.stringify(games));
  }

  /**
  * Loads game data to browser localstorage
  *
  * @function load
  * @param slot {number}
  */
  public load(slot: number) {
    this.clear();
    const games = this.getSavedGames();
    if (games.hasOwnProperty(slot)) {
      this.companyService.loadMultiple(games[slot].companies);
      this.planetService.loadMultiple(games[slot].planets);
      this.gameSettings.setAll(games[slot].settings);
    }
    // @todo route to somewhere?
  }

  /**
  * Outputs all game state to the browser console
  *
  * @function log
  */
  public log() {
    console.log(this.getStateObject());
  }

  /**
  * Returns an array of all saved games
  *
  * @function getSavedGames
  * @returns {Array<GameState>}
  */
  public getSavedGames(): Array<GameState> {
    const stateObject = JSON.parse(localStorage.getItem(GameStateService.namespace));
    return stateObject ? stateObject : [];
  }

  /**
  * Gets all game state
  *
  * @function getStateObject
  * @returns {GameState}
  */
  private getStateObject(): GameState {
    return {
      companies: this.companyService.getAll(),
      planets: this.planetService.getAll(),
      settings: this.gameSettings.getAll()
    };
  }

  /**
  * Clears current game state
  *
  * @function clear
  */
  public clear() {
    return {
      companies: this.companyService.clear(),
      planets: this.planetService.clear(),
      settings: this.gameSettings.clear()
    };
  }
}
