import { NgModule } from '@angular/core';

import { SideBarComponent } from './SideBar.component';

import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    MatListModule,
    RouterModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
