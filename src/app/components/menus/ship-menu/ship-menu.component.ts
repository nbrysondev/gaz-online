import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company, Ship } from '../../../models';
import { SoundService, CompanyService, ContentService } from '../../../services';

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
    private contentService: ContentService, 
    private companyService: CompanyService,
    private router: Router
  ) { 
    this.ships = this.contentService.getShips();
    this.companyName = "Player 1 Inc.";
    this.nameChosen = false;
    this.company = this.companyService.getCurrentPlayer();
    if (!this.company) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.soundService.play("modal-ping.ogg");
  }

  public setName() {
    this.nameChosen = true;
  }

  public showShipDetails(ship: Ship) {
    this.selectedShip = ship;
    this.soundService.play("ships/"+ship.slug+".ogg");
  }

  public unselectShip() {
    this.selectedShip = null;
    this.soundService.stop();
  }

  public selectShip() {
    this.soundService.stop();
  }
  
}
