import { Component, input } from '@angular/core';

import { Amiibo } from '../../../../models/amiibo';

@Component({
  selector: 'amiibo-item',
  standalone: true,
  imports: [],
  templateUrl: './amiibo-item.component.html',
  styleUrl: './amiibo-item.component.scss'
})
export class AmiiboItemComponent {

  public item = input.required<Amiibo>();
}
