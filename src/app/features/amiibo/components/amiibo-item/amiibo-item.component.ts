import { Component, input } from '@angular/core';

import { Amiibo } from '../../../../models/amiibo';

import { AseButtonComponent } from '../../../../shared/ase-btn/ase-button/ase-button.component';

@Component({
  selector: 'amiibo-item',
  standalone: true,
  imports: [AseButtonComponent],
  templateUrl: './amiibo-item.component.html',
  styleUrl: './amiibo-item.component.scss'
})
export class AmiiboItemComponent {

  public item = input.required<Amiibo>();

  public addToCart(): void {
    console.log("ADD TO CART");
  }
}
