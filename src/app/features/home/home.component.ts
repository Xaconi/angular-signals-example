import { Component, WritableSignal, signal } from '@angular/core';
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

  public totalAmiibos: WritableSignal<number> = signal(0);

  constructor(private _amiiboService: AmiiboService) { }

  public amiiboList$ = this._amiiboService.getAmiibos().subscribe(amiiboList => {
    this.totalAmiibos.set(amiiboList.amiibo.length);
    return amiiboList.amiibo;
  });
}
