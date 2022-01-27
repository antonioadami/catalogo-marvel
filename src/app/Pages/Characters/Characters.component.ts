import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { CharactersService } from 'src/app/services/characters/characters.service';
@Component({
  templateUrl: './Characters.component.html',
  styleUrls: ['./Characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characterId: number = 0

  constructor(
    private router: Router,
    private charactersService: CharactersService
    ) {}

  ngOnInit(): void {
    this.router.events.subscribe(
      (event) => {
        if(event instanceof NavigationEnd) {
          this.characterId = parseInt(event.url.split('/')[2]);
          console.log(this.characterId);

          this.charactersService.getCharacterById(this.characterId).subscribe(result => {
            console.log(result)
          })

        }
      });
  }

}
