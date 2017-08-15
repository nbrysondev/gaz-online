import { Injectable } from '@angular/core';
import { EntityService, ShipService } from '.';
import { Company, Ship, CompanyContent } from '../models';

@Injectable()
export class CompanyService extends EntityService {

  private static names = ['Merchant', 'Business Person', 'Trader', 'Entrepreneur'];

  protected entities: Array<Company>;
  private currentPlayer: number;


  constructor(protected shipService: ShipService) {
    super();
    this.currentPlayer = 0;
  }

  /**
  * Returns all companies in order of net worth
  *
  * @function getCompaniesRanked
  * @return {Array<Company>}
  */
  public getCompaniesRanked(): Array<Company> {
    return this.getAll().sort((companyA, companyB) =>  companyA.netWorth - companyB.netWorth);
  }


  /**
  * Adds the ship to the selected company
  *
  * @function addShipToCompany
  */
  public addShipToCompany(company: Company, ship: Ship) {
    company.ship = ship;
  }

  /**
  * Returns company status string based on net worth
  *
  * @todo implement me!
  * @function addShipToCompany
  * @param netWorth
  * @returns string
  */
  public getCompanyStatus(netWorth: number): string {
    return CompanyService.names[Math.floor(Math.random() * CompanyService.names.length)];
  }

  /**
  * Returns the first company that doesn't have a ship
  *
  * @function getCompanyWithoutShip
  * @return {Company}
  */
  public getCompanyWithoutShip(): Company {
    return this.entities.find(company => {
      return company.ship === null;
    });
  }

  /**
  * Returns the first company that doesn't have a ship
  *
  * @function getBankruptCompanies
  * @return {string}
  */
  public getBankruptCompanies(): string {
    return this.entities
      .filter(company => company.isBankrupt)
      .map(company => company.name)
      .join(', ');
  }


  /**
  * Returns an array of ships that haven't been selected
  *
  * @function getAvailableShips
  * @return {Array<Ship>}
  */
  public getAvailableShips(): Array<Ship> {
    // Returns the ships from all companies that have one
    const takenShips = Array.from(new Set(this.entities
      .filter(company => company.ship !== null)
      .map(company => company.ship)
    ));

    return this.shipService.getAll().filter(ship => {
      return !takenShips.includes(ship);
    });
  }

  /**
  * Allocates a random ship to a company
  * @todo Need to work out if AI ship selection is random or based on personality
  *
  * @function allocateRandomShip
  * @param company {Company}
  */
  public allocateRandomShip(company: Company) {
    const availableShips = this.getAvailableShips();
    company.ship = availableShips[Math.floor(Math.random() * availableShips.length)];
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
        slug: 'player-' + i,
        name: '',
        personality: '',
        marketStrength: null,
        netWorth: null,
        isBankrupt: false,
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
        isBankrupt: false,
        ship: null,
        planet: null,
        commodities: [],
        player: null
      }
    );
  }

}
