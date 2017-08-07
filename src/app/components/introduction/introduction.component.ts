import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../services';

@Component({
  selector: 'gaz-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    this.soundService.play("characters/lender.ogg");
  }

}
