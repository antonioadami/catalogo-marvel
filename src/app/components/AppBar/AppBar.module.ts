import { NgModule } from '@angular/core';

import { AppBarComponent } from './AppBar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppBarComponent
  ],
  imports: [
    FlexLayoutModule,
    RouterModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    AppBarComponent
  ]
})
export class AppBarModule { }
