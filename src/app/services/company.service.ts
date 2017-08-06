import { Injectable } from '@angular/core';
import { EntityService } from '.';
import { Company, CompanyContent } from '../models';

@Injectable()
export class CompanyService extends EntityService {

  protected entities: Array<Company>;

  /**
  * Adds a given number of player companies to the companies array
  *
  * @function addPlayerCompanies
  * @param quanity {number}
  */
  public addPlayerCompanies(quantity: number): void {
    for (let i = 1; i <= quantity; i++) {
      this.entities.push({
        slug: "player-"+i,
        name: "",
        personality: "",
        marketStrength: null,
        netWorth: null,
        ship: null,
        planet: null,
        commodities: [],
        player: i
      });
    }
  }

  /**
  * Creates a new Company from a CompanyContent instance
  *
  * @function create
  * @param company {CompanyContent}
  * @return {Company}
  */
  protected create(company: CompanyContent): Company {
    return Object.assign(
      company,
      {
        marketStrength: 0,
        netWorth: 0,
        ship: null,
        planet: null,
        commodities: [],
        player: null
      }
    )
  }

}
