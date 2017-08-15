import { Component, OnInit } from '@angular/core';
import { SoundService, CompanyService, GameStateService } from '../../services';
import { Company } from '../../models';

@Component({
  selector: 'gaz-new-week',
  templateUrl: './new-week.component.html',
  styleUrls: ['./new-week.component.css']
})
export class NewWeekComponent implements OnInit {

  public company: Company;
  public status: string;
  public bankruptCompanies: string;
  public week: number;
  public rankings: Array<Company>;

  constructor(
    private gameStateService: GameStateService,
    private companyService: CompanyService
  ) {
    // @todo REMOVE THIS WHEN COMPLETE
    //this.gameStateService.load('DEV');
  }

  ngOnInit() {

    // save the game state
    this.gameStateService.save(0);

    // set template variables
    this.company = this.gameStateService.getCurrentPlayer();
    this.week = this.gameStateService.getWeek();
    this.status = this.companyService.getCompanyStatus(this.company.netWorth);
    this.bankruptCompanies = this.companyService.getBankruptCompanies() || 'none';
    this.rankings = this.companyService.getCompaniesRanked();
  }
}
