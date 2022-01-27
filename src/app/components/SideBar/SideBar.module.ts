import { NgModule } from '@angular/core';

import { SideBarComponent } from './SideBar.component';

import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    MatListModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
