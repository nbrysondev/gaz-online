import { Component, OnInit } from '@angular/core';
import { ContentService, SoundService } from '../../../services';

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
    private contentService: ContentService,
    private soundService: SoundService
  ) { 
    this.heading = contentService.get("content.playerMenu.title");
    this.blurb = contentService.get("content.playerMenu.blurb");
  }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

}
