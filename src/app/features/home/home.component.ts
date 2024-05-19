import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Amiibo } from '../../models/amiibo';
import { AmiiboFilter } from '../../models/amiibo-filter';
import { AmiiboListFilter } from '../../models/amiibo-list-filter';

import { AmiiboService } from '../../services/amiibo.service';

import { AmiiboItemComponent } from '../amiibo/components/amiibo-item/amiibo-item.component';
import { AmiiboListComponent } from '../amiibo/components/amiibo-list/amiibo-list.component';
import { AseLoaderComponent } from '../../shared/ase-loader/ase-loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, AmiiboItemComponent, AmiiboListComponent, AseLoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public totalAmiibos: WritableSignal<number> = signal(0);
  public amiibos: WritableSignal<Array<Amiibo>> = signal([]);
  public amiiboSeries: WritableSignal<Array<AmiiboFilter>> = signal([]);
  public amiiboTypes: WritableSignal<Array<AmiiboFilter>> = signal([]);
  public amiiboCharacters: WritableSignal<Array<AmiiboFilter>> = signal([]);
  public isLoading: WritableSignal<boolean> = signal(true);
  public filter: WritableSignal<AmiiboListFilter> = signal({ });

  constructor(private _amiiboService: AmiiboService) { }

  public amiiboList$ = this._amiiboService.getAmiibos().subscribe(amiiboList => {
    this.totalAmiibos.set(amiiboList.amiibo.length);
    this.amiibos.set(amiiboList.amiibo);
    this.isLoading.set(false);
  });

  public amiiboSeries$ = this._amiiboService.getAmiiboSeries().subscribe(amiiboSeriesList => {
    this.amiiboSeries.set(amiiboSeriesList.amiibo);
  });

  public amiiboTypes$ = this._amiiboService.getAmiiboTypes().subscribe(amiiboTypesList => {
    this.amiiboTypes.set(amiiboTypesList.amiibo);
  });

  public amiiboCharacters$ = this._amiiboService.getAmiiboCharacters().subscribe(amiiboCharactersList => {
    this.amiiboCharacters.set(amiiboCharactersList.amiibo);
  });

  public updateAmiiboSeries(gameSeries: string) {
    this.filter.set({...this.filter(), gameSeries });
    this._updateList();
  }

  public updateAmiiboType(type: string) {
    this.filter.set({...this.filter(), type });
    this._updateList();
  }

  public updateAmiiboCharacter(character: string) {
    this.filter.set({...this.filter(), character });
    this._updateList();
  }

  private _updateList(): void {
    this.isLoading.set(true);
    this._amiiboService.getAmiibos(this.filter()).subscribe(amiiboList => {
      this.totalAmiibos.set(amiiboList.amiibo.length);
      this.amiibos.set(amiiboList.amiibo);
      this.isLoading.set(false);
    });
  }
}
