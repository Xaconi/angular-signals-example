import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AseHeaderComponent } from '../ase-header/ase-header.component';

@Component({
  selector: 'ase-layout',
  standalone: true,
  imports: [RouterOutlet, AseHeaderComponent],
  templateUrl: './ase-layout.component.html',
  styleUrl: './ase-layout.component.scss'
})
export class AseLayoutComponent {

}
