import { Component, OnInit } from '@angular/core';
import { SoundService, CompanyService, GameStateService, GameSettingsService } from '../../services';
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
  public difficulty: string;

  constructor(
    private gameStateService: GameStateService,
    private companyService: CompanyService,
    private gameSettingsService: GameSettingsService
  ) {
    // @todo REMOVE THIS WHEN COMPLETE
    // this.gameStateService.save(0);
    this.gameStateService.load(0);
  }

  ngOnInit() {

    // save the game state
    // this.gameStateService.save(0);

    // set template variables
    this.company = this.gameStateService.getCurrentPlayer();
    this.week = this.gameStateService.getWeek();
    this.status = this.companyService.getCompanyStatus(this.company.netWorth);
    this.bankruptCompanies = this.companyService.getBankruptCompanies() || 'none';
    this.rankings = this.companyService.getCompaniesRanked();
    this.difficulty = this.gameSettingsService.get('difficulty');
  }
}
