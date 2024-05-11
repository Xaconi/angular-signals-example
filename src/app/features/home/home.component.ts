import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { Amiibo } from '../../models/amiibo';

import { AmiiboService } from '../../services/amiibo.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers: [AmiiboService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private _amiiboService: AmiiboService) { }

  public amiiboList$ = this._amiiboService.getAmiibos().pipe(map(amiiboList => amiiboList.amiibo));
}
