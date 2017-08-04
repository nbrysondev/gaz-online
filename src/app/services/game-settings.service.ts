import { Injectable } from '@angular/core';
import { GameSettings } from '../models';

@Injectable()
export class GameSettingsService {

  private settings: GameSettings;

  constructor() { }

  public get(property: string) {
    if (this.settings[property]) {
      return this.settings[property];
    } else {
      throw new Error("Unable to retrieve setting: "+property);
    }
  }

  public set(property: string, value: any) {
    if (this.settings[property]) {
      this.settings[property] = value;
    } else {
      throw new Error("Unable to set setting: " + property + " to value: " + value);
    }
  }

}
