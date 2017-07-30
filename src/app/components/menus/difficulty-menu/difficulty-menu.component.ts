import { Component, OnInit } from '@angular/core';
import { ContentService, SoundService } from '../../../services';

@Component({
  selector: 'gaz-difficulty-menu',
  templateUrl: './difficulty-menu.component.html',
  styleUrls: ['./difficulty-menu.component.css']
})
export class DifficultyMenuComponent implements OnInit {

  public difficultyLevels = ["Tutorial", "Novice", "Beginner", "Intermediate", "Expert", "Master"];
  public heading: string;
  public blurb: string;

  constructor(
    private contentService: ContentService,
    private soundService: SoundService
  ) { 
    this.heading = contentService.get("difficultyMenu.title");
    this.blurb = contentService.get("difficultyMenu.blurb");
  }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

}
