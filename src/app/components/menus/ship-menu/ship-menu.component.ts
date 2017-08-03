import { Component, OnInit } from '@angular/core';
import { Ship } from '../../../models';
import { SoundService, ContentService } from '../../../services';

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

  constructor(private soundService: SoundService, private contentService: ContentService) { 
    this.ships = this.contentService.getShips();
    this.companyName = "Player 1 Inc.";
    this.nameChosen = false;
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
