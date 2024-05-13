import { Component, inject, signal } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'ase-cart',
  standalone: true,
  imports: [],
  templateUrl: './ase-cart.component.html',
  styleUrl: './ase-cart.component.scss'
})
export class AseCartComponent {

  private _cartService = inject(CartService);

  public cartQuantity = signal<number>(0);

  constructor() {
    this._cartService.cart$.subscribe(newCart => {
      let itemsQuantity = 0;
      newCart.items.forEach(item => itemsQuantity += item.quantity);
      this.cartQuantity.set(itemsQuantity);
    })
  }
}
