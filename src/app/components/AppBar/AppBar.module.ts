import { NgModule } from '@angular/core';

import { AppBarComponent } from './AppBar.component';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppBarComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    AppBarComponent
  ]
})
export class AppBarModule { }
