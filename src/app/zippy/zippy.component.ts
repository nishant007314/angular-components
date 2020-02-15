import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
  @Input('title') title: string;
  isDropDown: boolean = false;

  dropDownClicked() {
    this.isDropDown = this.isDropDown ? false : true;
  }
}
