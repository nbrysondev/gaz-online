import { Injectable } from '@angular/core';
import { CompanyService, PlanetService, GameSettingsService } from '.';
import { Company } from '../models';
import { Router } from '@angular/router';

@Injectable()
export class GameStateService {

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

  public getWeek() {
    return this.week;
  }

  public nextWeek() {
    this.week++;
  }

  public save() {

  }

  public load() {

  }

  public log() {
    console.log({
      companies: this.companyService.getAll(),
      planets: this.planetService.getAll(),
      settings: this.gameSettings.getAll()
    });
  }
}
