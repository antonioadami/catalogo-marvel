import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';


import { CharactersComponent } from './Characters.component';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    FlexLayoutModule,
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
