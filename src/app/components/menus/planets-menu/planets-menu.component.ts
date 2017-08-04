import { Component, OnInit } from '@angular/core';
import { PlanetContent, Planet } from '../../../models';
import { SoundService, ContentService, PlanetService } from '../../../services';

@Component({
  selector: 'gaz-planets-menu',
  templateUrl: './planets-menu.component.html',
  styleUrls: ['./planets-menu.component.css']
})
export class PlanetsMenuComponent implements OnInit {

  public selectedPlanets: Array<PlanetContent>;
  public unselectedPlanets: Array<PlanetContent>;
  
  // The planet the user wishes to change
  public planetToReplace: PlanetContent;

  private maxPlanets = 7;

  constructor(
    private soundService: SoundService, 
    private contentService: ContentService,
    private planetService: PlanetService) { }

  ngOnInit() {
    if (!this.planetService.hasPlanets()) {
      this.setRandomPlanets();
    } else {
      this.selectedPlanets = this.planetService.getAll();
    }
  }

  public setRandomPlanets() {

    this.unselectedPlanets = [];
    this.planetService.clear();

    let tmp = this.contentService.getPlanets().slice(0);

    for (let i = 0; i < this.maxPlanets; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      this.planetService.add(removed[0]);
    }

    this.unselectedPlanets = tmp;
    this.selectedPlanets = this.planetService.getAll();
    this.soundService.play("main-menu-select.ogg");
  }

  public replacePlanet(selectedPlanet: Planet) {
    
    // Add the planet the player has chosen to the selected planets array
    this.planetService.replace(this.planetToReplace, selectedPlanet);
    this.selectedPlanets = this.planetService.getAll();

    // Add the planet the player is replacing to the unselected planets array
    this.unselectedPlanets = this.unselectedPlanets.map(
      planet => planet === selectedPlanet ? this.planetToReplace : planet
    );

    this.soundService.play("main-menu-select.ogg");
    this.planetToReplace = null;
  }
  
  public showPlanetModal(planet: Planet) {
    this.planetToReplace = planet;
  }
}
