import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services';

@Component({
  selector: 'gaz-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public title: string;
  public heading: string;
  public blurb: string;

  constructor(
    private contentService: ContentService
  ) { 
    this.title = contentService.get("title");
    this.heading = contentService.get("mainMenu.title");
    this.blurb = contentService.get("mainMenu.blurb");
  }

  ngOnInit() {
  }

}
