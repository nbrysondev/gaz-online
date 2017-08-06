import { Injectable } from '@angular/core';
import { CompanyService, PlanetService, GameSettingsService } from '.';

@Injectable()
export class GameStateService {

  constructor(
    private companyService: CompanyService, 
    private planetService: PlanetService, 
    private gameSettings: GameSettingsService
  ) { }

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
