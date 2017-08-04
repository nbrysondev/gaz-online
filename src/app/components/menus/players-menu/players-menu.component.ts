import { Component, OnInit } from '@angular/core';
import { SoundService, GameSettingsService } from '../../../services';

@Component({
  selector: 'gaz-players-menu',
  templateUrl: './players-menu.component.html',
  styleUrls: ['./players-menu.component.css']
})
export class PlayersMenuComponent implements OnInit {

  public players = ["One", "Two", "Three", "Four", "Five", "Six"];
  public heading: string;
  public blurb: string;

  constructor(
    private soundService: SoundService,
    private gameSettings: GameSettingsService
  ) { }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

  public setPlayers(players: string) {
    this.gameSettings.set("numOfPlayers", players);
  }

}
