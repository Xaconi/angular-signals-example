import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AmiiboResponse } from '../models/data/amiibo-response';
import { AmiiboFilterResponse } from '../models/data/amiibo-filter.response';
import { AmiiboListFilter } from '../models/amiibo-list-filter';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  public path: string = 'https://amiiboapi.com/api/';

  constructor(private _httpClient: HttpClient) { }

  public getAmiibos(filter: AmiiboListFilter = {}): Observable<AmiiboResponse> {

    const hasFilter = Object.keys(filter).length;
    let formattedFilter = filter.gameSeries ? `gameseries=${filter.gameSeries}`  : '';
    formattedFilter += filter.type ? `${formattedFilter ? '&' : ''}type=${filter.type}`  : '';
    formattedFilter += filter.character ? `${formattedFilter ? '&' : ''}character=${filter.character}`  : '';

    return this._httpClient.get<AmiiboResponse>(`${this.path}amiibo/${hasFilter ? `?${formattedFilter}` : ''}`);
  }

  public getAmiiboByHead(head: string): Observable<AmiiboResponse> {
    return this._httpClient.get<AmiiboResponse>(`${this.path}amiibo/?head=${head}&showgames&showusage`);
  }

  public getAmiiboSeries(): Observable<AmiiboFilterResponse> {
    return this._httpClient.get<AmiiboFilterResponse>(`${this.path}amiiboseries/`);
  }

  public getAmiiboTypes(): Observable<AmiiboFilterResponse> {
    return this._httpClient.get<AmiiboFilterResponse>(`${this.path}type/`);
  }

  public getAmiiboCharacters(): Observable<AmiiboFilterResponse> {
    return this._httpClient.get<AmiiboFilterResponse>(`${this.path}character/`);
  }
}
