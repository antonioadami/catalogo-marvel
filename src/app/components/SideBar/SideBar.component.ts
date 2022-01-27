import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.scss']
})
export class SideBarComponent {
  @Output() sidenavClose = new EventEmitter();

  onSidenavClose() {
    this.sidenavClose.emit();
  }

}
