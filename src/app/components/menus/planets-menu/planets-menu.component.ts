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

  constructor(
    private soundService: SoundService, 
    private contentService: ContentService,
    private planetService: PlanetService) { }

  ngOnInit() {
    // Set our selected planets if we haven't previously done so 
    if (!this.planetService.hasEntities()) {
      this.setRandomPlanets();
    } else {
      this.selectedPlanets = this.planetService.getAll();
    }
  }

  /**
  * Randomly selects a given number of planets from the planet content
  * service and stores them
  *
  * @function setRandomPlanets
  */
  public setRandomPlanets(): void {

    this.unselectedPlanets = [];
    this.planetService.clear();

    // Create copy of the array
    let tmp = this.contentService.getPlanets().slice(0);
    
    // Select any mandatory planets
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].required) {
        var removed = tmp.splice(i, 1);
        this.planetService.add(removed[0]);
      }
    }
    
    var count = this.planetService.maxPlanets - this.planetService.count();
    // Randomly select given number of planets from the planet content
    for (let i = 0; i < count; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      this.planetService.add(removed[0]);
    }

    this.unselectedPlanets = tmp;
    this.selectedPlanets = this.planetService.getAll();
    this.soundService.play("main-menu-select.ogg");
  }

  /**
  * Replaces a given planet stored within the PlanetService
  *
  * @function replacePlanet
  * @param selectedPlanet {Planet}
  */
  public replacePlanet(selectedPlanet: Planet): void {
    
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

  /**
  * @function showPlanetModal
  * @param planet {Planet}
  */
  public showPlanetModal(planet: Planet) {
    this.planetToReplace = planet;
  }
}
