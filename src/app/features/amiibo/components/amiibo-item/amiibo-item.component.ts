import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Amiibo } from '../../../../models/amiibo';

import { AseButtonComponent } from '../../../../shared/ase-button/ase-button.component';

import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'amiibo-item',
  standalone: true,
  imports: [RouterModule, AseButtonComponent],
  templateUrl: './amiibo-item.component.html',
  styleUrl: './amiibo-item.component.scss'
})
export class AmiiboItemComponent {

  private _cartService = inject(CartService);

  public item = input.required<Amiibo>();

  public addToCart(): void {
    console.log("ADD TO CART");
    this._cartService.addToCart(this.item());
  }
}
