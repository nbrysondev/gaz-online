import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gaz-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() label: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public itemClicked(event) {
    this.onClick.emit();
  }

}
