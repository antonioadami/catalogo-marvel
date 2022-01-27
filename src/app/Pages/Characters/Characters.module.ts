import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';

import { CharactersComponent } from './Characters.component';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
