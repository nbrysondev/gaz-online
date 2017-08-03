import { Component, OnInit } from '@angular/core';
import { Planet } from '../../../models';
import { SoundService, ContentService } from '../../../services';

@Component({
  selector: 'gaz-planets-menu',
  templateUrl: './planets-menu.component.html',
  styleUrls: ['./planets-menu.component.css']
})
export class PlanetsMenuComponent implements OnInit {

  public selectedPlanets = [];
  public unselectedPlanets = [];
  // The planet the user wishes to change
  public planetToReplace: Planet;

  private maxPlanets = 7;

  constructor(private soundService: SoundService, private contentService: ContentService) { }

  ngOnInit() {
    this.setRandomPlanets();
  }

  public setRandomPlanets() {

    this.selectedPlanets = [], this.unselectedPlanets = [];
    let tmp = this.contentService.getPlanets().slice(0);

    for (let i = 0; i < this.maxPlanets; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      this.selectedPlanets.push(removed[0]);
    }

    this.unselectedPlanets = tmp;

    this.soundService.play("main-menu-select.ogg");
  }

  public showPlanetModal(planet: Planet) {
    this.planetToReplace = planet;
  }

  public replacePlanet(selectedPlanet: Planet) {
    
    // Add the planet the player has chosen to the selected planets array
    this.selectedPlanets = this.selectedPlanets.map(
      planet => planet === this.planetToReplace ? selectedPlanet : planet 
    );

    // Add the planet the player is replacing to the unselected planets array
    this.unselectedPlanets = this.unselectedPlanets.map(
      planet => planet === selectedPlanet ? this.planetToReplace : planet
    );

    this.soundService.play("main-menu-select.ogg");
    this.planetToReplace = null;
  }
  
  public setPlanets() {
    // this is where we apply settings to the store
  }

}
