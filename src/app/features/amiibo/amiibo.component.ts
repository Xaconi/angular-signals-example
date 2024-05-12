import { Component, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AmiiboService } from '../../services/amiibo.service';

import { Amiibo } from '../../models/amiibo';

import { AseQuantityButtonComponent } from '../../shared/ase-quantity-button/ase-quantity-button.component';
import { AseButtonComponent } from '../../shared/ase-button/ase-button.component';

@Component({
  selector: 'app-amiibo',
  standalone: true,
  imports: [AseQuantityButtonComponent, AseButtonComponent],
  templateUrl: './amiibo.component.html',
  styleUrl: './amiibo.component.scss'
})
export class AmiiboComponent {

  private _activatedRoute = inject(ActivatedRoute);
  private _amiiboService = inject(AmiiboService);

  public amiibo: WritableSignal<Amiibo | null> = signal(null);
  public quantity: WritableSignal<number> = signal(1);
  public isLoading: WritableSignal<boolean> = signal(true);

  public amiiboHead = this._activatedRoute.snapshot.params['amiiboId'];
  public amiibo$ = this._amiiboService.getAmiiboByHead(this.amiiboHead).subscribe(amiiboList => {
    this.amiibo.set(amiiboList.amiibo[0]);
    this.isLoading.set(false);
  });

  public addToCart(): void {
    console.log(`ADD TO CART: QUANTITY ${this.quantity()}`);
  }
}
