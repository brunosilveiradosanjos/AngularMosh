import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ZippyContainerComponent {
  @Input() content: string;
  isExpanded: boolean = false;
  arrowIcon: string = 'keyboard_arrow_down';

  arrow() {
    this.isExpanded ? this.arrowIcon = 'keyboard_arrow_up' : this.arrowIcon = 'keyboard_arrow_down';
  }

  onClick() {
    this.isExpanded = !this.isExpanded;
    this.arrow()
  }
}
