import { Component } from '@angular/core';
import { AseCartComponent } from '../ase-cart/ase-cart.component';

@Component({
  selector: 'ase-header',
  standalone: true,
  imports: [AseCartComponent],
  templateUrl: './ase-header.component.html',
  styleUrl: './ase-header.component.scss'
})
export class AseHeaderComponent {

}
