import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../models/cart';
import { Amiibo } from '../models/amiibo';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = new BehaviorSubject<Cart>({ items: [], total: 0 });
  public cart$ = this.cart.asObservable();

  constructor() { }

  public addToCart(item: Amiibo, quantity: number = 1) {
    const currentCart = this.cart.getValue();
    const currentItem = currentCart.items.find(cartItem => cartItem.item.head === item.head);
    if(currentItem) {
      currentItem.quantity += quantity;
      this.cart.next(currentCart);
      return;
    }

    currentCart.items.push({
      item,
      quantity
    });
    this.cart.next(currentCart);
  }
}
