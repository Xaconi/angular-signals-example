import { Component, input } from '@angular/core';

import { Amiibo } from '../../../../models/amiibo';

import { AmiiboItemComponent } from '../amiibo-item/amiibo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'amiibo-list',
  standalone: true,
  imports: [CommonModule, AmiiboItemComponent],
  templateUrl: './amiibo-list.component.html',
  styleUrl: './amiibo-list.component.scss'
})
export class AmiiboListComponent {

  public amiibos = input.required<Array<Amiibo>>();
  public max = input<number>(Infinity);
}
