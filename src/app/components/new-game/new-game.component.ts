import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Planet, Company, Ship, PlayerCompany } from '../../interfaces';
import { Planets, Companies, Ships } from '../../../assets/data';

export enum MenuState {
  DifficultyMenu,
  NumberOfPlayersMenu,
  PlanetsMenu,
  CompetitorsMenu,
  ShipMenu,
  ShipDetails
}
@Component({
  selector: 'gaz-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  public states = MenuState;
  public state = MenuState.DifficultyMenu;

  public difficultyLevels = ["Tutorial", "Novice", "Beginner", "Intermediate", "Expert", "Master"];
  public players = ["One", "Two", "Three", "Four", "Five", "Six"];

  public player: PlayerCompany;
  public companyName: string;

  public companies: Array<Company> = [];
  public ships: Array<Ship> = [];
  public selectedPlanets = [];
  public unselectedPlanets = [];
  // The planet the user wishes to change
  public planetToReplace: Planet;

  private maxPlanets = 7;

  ngOnInit() {
    this.companies = Companies;
    this.ships = Ships;
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
    this.setRandomPlanets();
  }

  public changeDifficulty() {
    this.state = MenuState.NumberOfPlayersMenu;
  }

  public changeNumberOfPlayers() {
    this.state = MenuState.PlanetsMenu;
  }

  public setPlanets() {
    this.state = MenuState.CompetitorsMenu;
  }

  public selectShip() {
    this.state = MenuState.ShipMenu;
  }

  public showShipDetails(ship: Ship) {
    this.player.shipId = ship.id;
    //this.player.netWorth = this.player.ship.cost * -1;
    this.state = MenuState.ShipDetails;    
  }


  public showPlanetModal(planet: Planet) {
    this.planetToReplace = planet;
  }

  public replacePlanet(selectedPlanet: Planet) {

    this.selectedPlanets = this.selectedPlanets.map(
      planet => { 
        if (planet === this.planetToReplace) {
          return selectedPlanet;
        } else {
          return planet;
        }
      }
    );

    this.planetToReplace = null;
  }

  public setRandomPlanets() {

    this.selectedPlanets = [], this.unselectedPlanets = [];
    let tmp = Planets.slice(0);

    for (let i = 0; i < this.maxPlanets; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      this.selectedPlanets.push(removed[0]);
    }

    this.unselectedPlanets = tmp;
  }

  public setCompanyName(event: any) {
    this.player.name = this.companyName;
  }

}
