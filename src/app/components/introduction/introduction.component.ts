import { Component, OnInit } from '@angular/core';
import { SoundService, GameStateService } from '../../services';

@Component({
  selector: 'gaz-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(
      private soundService: SoundService,
      private gameStateService: GameStateService
  ) { }

  ngOnInit() {
    this.soundService.playFile('lender.ogg');
  }

  public checkTurnState() {
    this.gameStateService.setup();
  }

}
