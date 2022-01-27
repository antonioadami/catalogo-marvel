import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchingBarComponent } from './SearchingBar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchingBarComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    RouterModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SearchingBarComponent
  ]
})
export class SearchingBarModule { }
