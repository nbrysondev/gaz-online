import { Component, OnInit } from '@angular/core';
import { SoundService, GameSettingsService } from '../../../services';
@Component({
  selector: 'gaz-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public soundStatus: string;

  constructor(private soundService: SoundService, private gameSettingsService: GameSettingsService) { }

  ngOnInit() {
    this.setSound();
  }

  public toggleSound() {
    this.soundService.toggleSound();
    this.setSound();
  }

  public newGame() {
    this.gameSettingsService.set("newGameSetup", true);
  }

  private setSound() {
    this.soundStatus = this.soundService.isEnabled() ? "On" : "Off";
  }
}
