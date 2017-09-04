import { Component, OnInit } from '@angular/core';
import { Company } from '../../models';
import { GameStateService } from '../../services';

@Component({
  selector: 'gaz-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  public company: Company;

  constructor(
    private gameStateService: GameStateService
  ) { }

  ngOnInit() {
    this.company = this.gameStateService.getCurrentPlayer();
  }

}
