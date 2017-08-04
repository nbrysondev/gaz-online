import { Injectable } from '@angular/core';
import { Company } from '../models';


@Injectable()
export class CompanyService {

  private companies: Array<Company>;

  constructor() { }

  public add(company: Company) {
    this.companies.push(company);
  }

  public addPlayerCompanies(quantity: number) {
    for (let i = 1; i <= quantity; i++) {
      this.companies.push({
        slug: "player-"+i,
        name: "",
        personality: "",
        marketStrength: null,
        netWorth: null,
        shipId: null,
        planetId: null,
        player: i
      });
    }
  }

  public addMultiple(companies: Array<Company>) {
    this.companies.concat(companies);
  }

}
