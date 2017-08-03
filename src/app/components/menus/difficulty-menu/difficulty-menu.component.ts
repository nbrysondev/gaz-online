import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../../services';

@Component({
  selector: 'gaz-difficulty-menu',
  templateUrl: './difficulty-menu.component.html',
  styleUrls: ['./difficulty-menu.component.css']
})
export class DifficultyMenuComponent implements OnInit {

  public difficultyLevels = ["Tutorial", "Novice", "Beginner", "Intermediate", "Expert", "Master"];

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

}
