import { Component, OnInit } from '@angular/core';

export enum MenuState {
  MainMenu,
  NewGame
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Gazillionaire';
  public states = MenuState;
  public state = MenuState.MainMenu;

  ngOnInit() {
    this.state = MenuState.MainMenu;
  }
  public changeMenuState(i) {
    this.state = i;
  }
}
