import { Component, OnInit } from '@angular/core';
import { Company, Ship } from '../../../models';
import { SoundService, CompanyService, GameStateService } from '../../../services';

@Component({
  selector: 'gaz-ship-menu',
  templateUrl: './ship-menu.component.html',
  styleUrls: ['./ship-menu.component.css']
})
export class ShipMenuComponent implements OnInit {

  public ships: Array<Ship> = [];
  public selectedShip: Ship;
  public companyName: string;
  public nameChosen: boolean;
  public company: Company;

  constructor(
    private soundService: SoundService,
    private companyService: CompanyService,
    private gameStateService: GameStateService
  ) {
    this.ships = this.companyService.getAvailableShips();
    this.nameChosen = false;
    this.company = this.gameStateService.getCurrentPlayer();
    this.companyName = 'Player ' + this.company.player + ' Inc.';
  }

  ngOnInit() {
    this.soundService.play('modal-ping.ogg');
  }

  public setName() {
    this.nameChosen = true;
  }

  public showShipDetails(ship: Ship) {
    this.selectedShip = ship;
    this.soundService.play('ships/' + ship.slug + '.ogg');
  }

  public unselectShip() {
    this.selectedShip = null;
    this.soundService.stop();
  }

  public selectShip() {
    this.companyService.addShipToCompany(this.company, this.selectedShip);
    this.soundService.stop();
  }
}
