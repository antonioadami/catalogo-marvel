import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from "../../../environments/environment";

import { Observable } from 'rxjs';

import { ICharacter } from "./models/ICharacter";
import { IResult } from '../models/IResult';

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

    getCharacters(limit: number, offset: number): Observable<IResult<ICharacter>> {
      const params = this.params.append('limit',limit).append('offset',offset)
        return this.http.get <IResult<ICharacter>> (API_URL + '/characters', {
          params
        });
    }

}
