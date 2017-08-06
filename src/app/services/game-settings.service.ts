import { Injectable } from '@angular/core';
import { GameSettings } from '../models';

@Injectable()
export class GameSettingsService {

  private settings: GameSettings;

  constructor() {
    this.settings = {
      numOfPlayers: null,
      difficulty: null
    };
   }

  public getAll(): GameSettings {
    return this.settings;
  }

  public get(property: string) {
    if (this.settings.hasOwnProperty(property)) {
      return this.settings[property];
    } else {
      throw new Error("Unable to retrieve setting: " + property);
    }
  }

  public set(property: string, value: any) {
    if (this.settings.hasOwnProperty(property)) {
      this.settings[property] = value;
    } else {
      throw new Error("Unable to set setting: " + property + " to value: " + value);
    }
  }

}
