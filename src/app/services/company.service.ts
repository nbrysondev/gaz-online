import { Injectable } from '@angular/core';
import { EntityService, ShipService } from '.';
import { Company, Ship, CompanyContent } from '../models';

@Injectable()
export class CompanyService extends EntityService {

  protected entities: Array<Company>;
  private currentPlayer: Company;

  constructor(protected shipService: ShipService) { 
    super();
  }

  /**
  * Gets the current player. Sets it to the first player in the companies array
  * if uninitialised.
  *
  * @function getCurrentPlayer
  * @returns {Company}
  */
  public getCurrentPlayer() {

    if (!this.currentPlayer) {
      this.currentPlayer = this.entities[0];
    }

    return this.currentPlayer;
  }

  /**
  * Sets current player to the next company in the companies array
  *
  * @function nextPlayer
  * @returns {Company}
  */
  public nextPlayer() {

  }

  public addShipToCompany(company: Company, ship: Ship) {
    company.ship = ship;
  }

  /**
  * Allocates available ships to AI companies
  *
  * @function allocateShips
  */
  public allocateShips() {
   // this.entities.
  }

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
