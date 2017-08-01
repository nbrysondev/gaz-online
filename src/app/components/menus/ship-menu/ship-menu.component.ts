import { Component, OnInit } from '@angular/core';
import { Ship } from '../../../models';
import { Ships } from '../../../../assets/data';

@Component({
  selector: 'gaz-ship-menu',
  templateUrl: './ship-menu.component.html',
  styleUrls: ['./ship-menu.component.css']
})
export class ShipMenuComponent implements OnInit {

  public ships: Array<Ship> = [];
  public selectedShip: Ship;

  constructor() { 
    this.ships = Ships;
  }

  ngOnInit() {
  }

  public showShipDetails(ship: Ship) {
    this.selectedShip = ship;
  }

  public selectShip() {
    // do a thing
  }

  public unselectShip() {
    this.selectedShip = null;
  }

}
