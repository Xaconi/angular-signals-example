import { Component, OnChanges, SimpleChanges, WritableSignal, signal } from '@angular/core';
import { map } from 'rxjs';

import { Amiibo } from '../../models/amiibo';

import { AmiiboService } from '../../services/amiibo.service';

import { CommonModule } from '@angular/common';
import { AmiiboItemComponent } from '../amiibo/components/amiibo-item/amiibo-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AmiiboItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnChanges{

  public totalAmiibos: WritableSignal<number> = signal(0);
  public amiibos: WritableSignal<Array<Amiibo>> = signal([]);
  public isLoading: WritableSignal<boolean> = signal(false);

  constructor(private _amiiboService: AmiiboService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CHANGES");
  }

  public amiiboList$ = this._amiiboService.getAmiibos().subscribe(amiiboList => {
    this.totalAmiibos.set(amiiboList.amiibo.length);
    this.amiibos.set(amiiboList.amiibo);
  });
}
