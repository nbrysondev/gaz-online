import { Injectable } from '@angular/core';
import { CompanyService, PlanetService, GameSettingsService } from '.';

@Injectable()
export class GameStateService {
  
  private week: number;
  private currentPlayer: number;

  constructor(
    private companyService: CompanyService, 
    private planetService: PlanetService, 
    private gameSettings: GameSettingsService
  ) { 
    this.week = 0;
    this.currentPlayer = 1;
  }


  public getCurrentPlayer() {
    return this.currentPlayer;
  }

  public nextPlayer() {
    return this.nextPlayer();
  }

  public nextWeek() {
    return this.week;
  }

  public incrementWeek() {
    this.week += 1;
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
