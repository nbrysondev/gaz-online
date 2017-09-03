import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../services';
import { AssetUriPipe } from '../../pipes';
import { Planet } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'gaz-planet-intro',
  templateUrl: './planet-intro.component.html',
  styleUrls: ['./planet-intro.component.css'],
  providers: [AssetUriPipe]
})
export class PlanetIntroComponent implements OnInit {

  public planet: Planet;
  public planetUri: string;

  constructor(
    private router: Router, 
    private gameStateService: GameStateService,
    private assetUriPipe: AssetUriPipe
  ) {}

  ngOnInit() {
    const company = this.gameStateService.getCurrentPlayer();
    this.planet = company.planet;
    this.planetUri = this.assetUriPipe.transform(this.planet.slug, 'planets');
  }

  public proceed() {
    this.router.navigate(['/game/graphs']);
  }
}
