import { Component, OnInit } from '@angular/core';
import { SoundService, CompanyService, GameSettingsService } from '../../../services';

@Component({
  selector: 'gaz-players-menu',
  templateUrl: './players-menu.component.html',
  styleUrls: ['./players-menu.component.css']
})
export class PlayersMenuComponent implements OnInit {

  public heading: string;
  public blurb: string;

  constructor(
    private soundService: SoundService,
    private companyService: CompanyService,
    private gameSettingsService: GameSettingsService
  ) { }

  ngOnInit() {
    this.soundService.play('main-menu-select.ogg');
  }

  public setPlayers(players: string) {
    this.gameSettingsService.set('numOfPlayers', Number(players));
    this.companyService.addPlayerCompanies(Number(players));
  }

}
