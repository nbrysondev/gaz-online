import { Component, OnInit } from '@angular/core';
import { Company, CompanyContent } from '../../../models';
import { SoundService, ContentService, CompanyService } from '../../../services';

@Component({
  selector: 'gaz-competitors-menu',
  templateUrl: './competitors-menu.component.html',
  styleUrls: ['./competitors-menu.component.css']
})
export class CompetitorsMenuComponent implements OnInit {

  public competitors: Array<CompanyContent> = [];
 
  constructor(
    private soundService: SoundService, 
    private contentService: ContentService,
    private companyService: CompanyService
  ) { 
    this.competitors = this.contentService.getCompanies();
  }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

  public setCompetitors(competitors: Array<CompanyContent>) {
    this.companyService.addMultiple(competitors);
  }

}
