import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Planet, Company, Ship } from '../../models';
import { Planets, Companies, Ships } from '../../../assets/data';

@Component({
  selector: 'gaz-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  public companyName: string;

  public companies: Array<Company> = [];
  public ships: Array<Ship> = [];

  ngOnInit() {
    this.companies = Companies;
    this.ships = Ships;
    /*
    this.player = {
      id: null,
      name: "",
      slug: "",
      shipId: null,
      personality: "Needy Business Person | Inefficient Merchant",
      bankruptCompanies: "None",
      netWorth: 0,
      marketStrength: 400
    }
    */

  }

  public setCompanyName(event: any) {
    //this.player.name = this.companyName;
  }

}
