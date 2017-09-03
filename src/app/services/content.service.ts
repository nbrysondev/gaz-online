import { Injectable } from '@angular/core';
import { PlanetContent, Ship, Commodity, CompanyContent } from '../models';
import { GameContent } from '../../assets/general/content';
import { Planets } from '../../assets/planets/data';
import { Ships } from '../../assets/ships/data';
import { Commodities } from '../../assets/commodities/data';
import { Companies } from '../../assets/companies/data';

interface GameData {
  content: Object;
  planets: Array<PlanetContent>;
  ships: Array<Ship>;
  commodities: Array<Commodity>;
  companies: Array<CompanyContent>;
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
    const properties = property.split('.');
    let content = this.gameData;

    for (let i = 0; i < properties.length; i++) {

      const index = properties[i].match(/\[([^}]*)\]/);
      if (index) {
        const prop = properties[i].replace(/\[.*?\]/g, '');
        content = content[prop][index[1]];
      } else {
        content = content[properties[i]];
      }

      switch(typeof content) {
        case 'number':
        case 'string':
          return this.parsePlaceholders(content.toString());
        case 'undefined':
          return '';
      }

    }

    return '';
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

    const placeholders = content.match(/{([^}]*)}/g);

    if (placeholders) {
      for (let i=0; i < placeholders.length; i++) {
        const property = placeholders[i].replace(/[{}]/gi, '');
        const phContent = this.get(property);
        if (phContent) {
          content = content.replace(placeholders[i], phContent);
        }
      }
    }

    return content;
  }


}
