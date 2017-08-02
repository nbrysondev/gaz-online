import { Component, OnInit } from '@angular/core';
import { Company } from '../../../models';
import { Companies } from '../../../../assets/data';
import { SoundService } from '../../../services';

@Component({
  selector: 'gaz-competitors-menu',
  templateUrl: './competitors-menu.component.html',
  styleUrls: ['./competitors-menu.component.css']
})
export class CompetitorsMenuComponent implements OnInit {

  public competitors: Array<Company> = [];
 
  constructor(private soundService: SoundService) { 
    this.competitors = Companies;
  }

  ngOnInit() {
    this.soundService.play("main-menu-select.ogg");
  }

}
