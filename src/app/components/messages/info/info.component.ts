import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gaz-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public blurb: string;
  public img: string;

  constructor() { }

  ngOnInit() {
  }

}
