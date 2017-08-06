import { Component, OnInit } from '@angular/core';
import { GameStateService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private gameStateService: GameStateService) { }

  public title: string = 'Gazillionaire';

  ngOnInit() {
    this.gameStateService.log();
  }

}
