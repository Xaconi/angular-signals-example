import { Component, WritableSignal, output, signal } from '@angular/core';

@Component({
  selector: 'ase-quantity-button',
  standalone: true,
  imports: [],
  templateUrl: './ase-quantity-button.component.html',
  styleUrl: './ase-quantity-button.component.scss'
})
export class AseQuantityButtonComponent {

  public quantity: WritableSignal<number> = signal(1);

  public onQuantityChange = output<number>();

  public downQuantity() {
    const quantity = this.quantity();
    if(quantity > 1) {
      this.quantity.set(this.quantity() - 1);
      this.onQuantityChange.emit(this.quantity());
    }
  }

  public upQuantity() {
    this.quantity.set(this.quantity() + 1);
    this.onQuantityChange.emit(this.quantity());
  }
}
