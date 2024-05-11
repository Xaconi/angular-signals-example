import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AmiiboResponse } from '../models/data/amiibo-response';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  public path: string = 'https://amiiboapi.com/api/';

  constructor(private _httpClient: HttpClient) { }

  public getAmiibos(): Observable<AmiiboResponse> {
    return this._httpClient.get<AmiiboResponse>(`${this.path}amiibo`);
  }
}
