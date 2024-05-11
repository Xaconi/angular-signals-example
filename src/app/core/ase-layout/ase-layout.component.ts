import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AseHeaderComponent } from '../ase-header/ase-header.component';
import { AseFooterComponent } from '../ase-footer/ase-footer.component';

@Component({
  selector: 'ase-layout',
  standalone: true,
  imports: [RouterOutlet, AseHeaderComponent, AseFooterComponent],
  templateUrl: './ase-layout.component.html',
  styleUrl: './ase-layout.component.scss'
})
export class AseLayoutComponent {

}
