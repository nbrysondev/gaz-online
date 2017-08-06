import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../../../services';

@Component({
  selector: 'gaz-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public blurb: string;
  public img: string;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

}
