import { Component, OnInit } from '@angular/core';
import { Company } from '../../../models';
import { SoundService, ContentService } from '../../../services';

@Component({
  selector: 'gaz-competitors-menu',
  templateUrl: './competitors-menu.component.html',
  styleUrls: ['./competitors-menu.component.css']
})
export class CompetitorsMenuComponent implements OnInit {

  public competitors: Array<Company> = [];
 
  constructor(private soundService: SoundService, private contentService: ContentService) { 
    this.competitors = this.contentService.getCompanies();
  }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

}
