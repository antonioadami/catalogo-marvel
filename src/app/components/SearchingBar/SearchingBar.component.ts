import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { CharactersService } from 'src/app/services/characters/characters.service';

interface ILink {
  text: string;
  url: string;
}

@Component({
  selector: 'searching-bar',
  templateUrl: './SearchingBar.component.html',
  styleUrls: ['./SearchingBar.component.scss']
})
export class SearchingBarComponent implements OnInit {

  title: string = '';
  linkList: ILink[] = [];
  offset: number = 0;
  url: string = '/'
  searchString = ""
  hideSearchMore = false

  constructor(
    private router: Router,
    private charactersService: CharactersService
    ) {}

  ngOnInit() {

    this.router.events.subscribe(
      (event) => {
        if(event instanceof NavigationEnd) {
          this.url = event.url;
          this.setData(event.url, 20, 0)
        }
      });

  }

  setData(url: string, limit: number, offset: number) {
    this.searchString = ''

    if(this.offset === 0) {
      this.hideSearchMore = false
    }

    if(url.startsWith('/characters')) {
      this.title = 'Personagens'
      this.charactersService.getCharacters(limit, offset).subscribe(result => {
        this.linkList = [
          ...this.linkList,
          ...result.data.results.map(character => ({
            text: character.name,
            url: `characters/${character.id}`
          }))
        ]
      })
      return
    }
  }

  searchMore() {
    this.offset++;
    if(this.searchString) {
      this.searchByName(true)
      return
    }
    this.setData(this.url, 20, 20*this.offset)

  }

  searchByName(searchMore: boolean = false) {
    if(!searchMore) {
      this.offset = 0
      this.linkList = []
      this.hideSearchMore = false
    }

    if(!this.searchString) {
      this.setData(this.url, 20, 0)
      return
    }

    if(this.url.startsWith('/characters')) {
      this.charactersService.getCharactersByName(this.searchString, 20, 20*this.offset).subscribe(result => {
        if(result.data.results.length === 0) {
          this.hideSearchMore = true
          return
        }

        this.linkList = [
          ...this.linkList,
          ...result.data.results.map(character => ({
            text: character.name,
            url: `characters/${character.id}`
          }))
        ]
      })
      return
    }
  }
}
