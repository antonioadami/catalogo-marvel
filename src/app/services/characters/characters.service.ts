import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from "../../../environments/environment";

import { ICharacter } from "./models/ICharacter";

const API_URL = environment.backEndUrl;
const apikey = environment.apikey;
const hash = environment.hash;
const ts = environment.ts;

@Injectable({ providedIn: 'root' })
export class CharactersService {

    params: HttpParams;

    constructor(
        private http: HttpClient
    ) {

      this.params = new HttpParams().append("apikey",apikey).append("hash", hash).append("ts", ts); //Create new HttpParams
    }

    getCharacters(limit: number, offset: number) {
      const params = this.params.append('limit',limit).append('offset',offset)
        return this.http.get <ICharacter> (API_URL + '/characters', {
          params
        });
    }

}
