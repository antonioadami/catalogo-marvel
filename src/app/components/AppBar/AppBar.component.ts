import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './AppBar.component.html',
  styleUrls: ['./AppBar.component.scss']
})
export class AppBarComponent {

  @Output() sidenavToggle = new EventEmitter();

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
