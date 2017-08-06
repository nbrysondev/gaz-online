import { Injectable } from '@angular/core';
import { PlanetContent, Ship, Commodity, CompanyContent } from '../models';
import { GameContent, Planets, Ships, Commodities, Companies } from '../../assets/data';

interface GameData {
  content: Object,
  planets: Array<PlanetContent>,
  ships: Array<Ship>,
  commodities: Array<Commodity>,
  companies: Array<CompanyContent>
}

@Injectable()
export class ContentService {

  private gameData: GameData;

  constructor() { 
    this.gameData = {
      content: GameContent,
      planets: Planets,
      ships: Ships,
      commodities: Commodities,
      companies: Companies
    };
  }

  /*
  * Retrives a property from the GameContent object
  * e.g. mainMenu.title
  */
  public get(property: string) {
    let properties = property.split('.'),
        content = this.gameData;
  
    for (let i=0; i < properties.length; i++) {

      let index = properties[i].match(/\[([^}]*)\]/);
      if (index) {
        let property = properties[i].replace(/\[.*?\]/g, '');
        content = content[property][index[1]]
      } else {
        content = content[properties[i]];
      }

      switch(typeof content) {
        case "number":
        case "string":
          return this.parsePlaceholders(content.toString());
        case "undefined":
          return "";
      }

    }

    return "";
  }

  public getCompanies(): Array<CompanyContent> {
    return this.gameData.companies;
  }

  public getPlanets(): Array<PlanetContent> {
    return this.gameData.planets;
  }

  public getShips(): Array<Ship> {
    return this.gameData.ships;
  }

  public getCommodities(): Array<Commodity> {
    return this.gameData.commodities;
  }

  /*
  * Searches for placeholders within a content string and replaces them with the appropriate value
  */
  public parsePlaceholders(content: string) {
    
    let placeholders = content.match(/{([^}]*)}/g);

    if (placeholders) {
      for (let i=0; i < placeholders.length; i++) {
        let property = placeholders[i].replace(/[{}]/gi, '');
        let phContent = this.get(property);
        if (phContent) {
          content = content.replace(placeholders[i], phContent);
        }
      }
    }

    return content;
  }


}
