import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../services';

@Component({
  selector: 'gaz-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameStateService: GameStateService) { }

  ngOnInit() {
    this.gameStateService.log();
  }

}
