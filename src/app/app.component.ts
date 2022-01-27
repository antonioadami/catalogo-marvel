import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mobile = false
  openDrawer = false

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = true;
        } else {
          this.mobile = false;
        }
      });
  }
}
