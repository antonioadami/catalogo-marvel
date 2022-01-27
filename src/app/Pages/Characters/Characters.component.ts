import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CharactersService } from 'src/app/services/characters/characters.service';
import { ICharacter } from 'src/app/models/ICharacter';
import { ThumbnailPathTransformer } from 'src/app/utils/thumbnailPathTransformer';
@Component({
  templateUrl: './Characters.component.html',
  styleUrls: ['./Characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characterId: number = 0
  character: ICharacter = {description: '',id: 0,name: '',thumbnail: {extension: '',path:''}, urls: []}
  thumbnailPathTransformer = ThumbnailPathTransformer
  location = location

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,

    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.characterId = parseInt(params['id']);
        console.log(this.characterId);

        if(this.characterId !== 0) {
          this.charactersService.getCharacterById(this.characterId).subscribe(result => {
            this.character = result.data.results[0]
            console.log(this.character)
          })
        }

      })
  }

  getUrlIcon(type:string) :string {
    switch(type) {
      case 'wiki':
        return 'description';
        break;

      case 'detail':
        return 'info';
        break;

      case 'comiclink':
        return 'menu_book';
        break;

      default:
        return ''
        break;
    }
  }

}
