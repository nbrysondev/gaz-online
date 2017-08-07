import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gaz-planet-intro',
  templateUrl: './planet-intro.component.html',
  styleUrls: ['./planet-intro.component.css']
})
export class PlanetIntroComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit() {
  }

  public proceed() {
    this._router.navigate(['/game/graphs']);
  }
}
