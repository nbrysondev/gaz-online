import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../../services';

@Component({
  selector: 'gaz-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.css']
})
export class LoadGameComponent implements OnInit {

  public slots: Array<Object>;
  private maxSlots = 5;

  constructor(private gameStateService: GameStateService) {}

  ngOnInit() {
    this.slots = this.gameStateService.getSavedGames().map(game => {
      return { name: '', active: true };
    });

    const slotSize = this.maxSlots - this.slots.length;

    if (slotSize > 0) {
      for (let i = 0; i < slotSize; i++) {
        this.slots.push({ name: '', active: false });
      }
    }
  }

  public loadGame(slot: number) {
    this.gameStateService.load(slot);
  }

}
