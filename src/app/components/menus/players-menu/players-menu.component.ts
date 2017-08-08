import { Component, OnInit } from '@angular/core';
import { SoundService, CompanyService } from '../../../services';

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
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

  public setPlayers(players: string) {
    this.companyService.addPlayerCompanies(Number(players));
  }

}
