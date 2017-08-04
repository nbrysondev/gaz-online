import { Component, OnInit } from '@angular/core';
import { SoundService, GameSettingsService } from '../../../services';

@Component({
  selector: 'gaz-difficulty-menu',
  templateUrl: './difficulty-menu.component.html',
  styleUrls: ['./difficulty-menu.component.css']
})
export class DifficultyMenuComponent implements OnInit {

  public difficultyLevels = ["Tutorial", "Novice", "Beginner", "Intermediate", "Expert", "Master"];

  constructor(
    private soundService: SoundService,
    private gameSettings: GameSettingsService
  ) { }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

  public setDifficulty(difficulty: string) {
    this.gameSettings.set("difficulty", difficulty);
  }

}
