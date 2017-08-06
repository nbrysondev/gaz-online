import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gaz-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() label: string;
  @Input() link: string;
  @Input() colour: string = 'blue';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public itemClicked(event) {
    if (!this.disabled) {
      this.onClick.emit();
      if (this.link) {
        this.router.navigate(['/'+this.link]);
      }
    }
  }

}
