import { Component, output } from '@angular/core';

@Component({
  selector: 'ase-button',
  standalone: true,
  imports: [],
  templateUrl: './ase-button.component.html',
  styleUrl: './ase-button.component.scss'
})
export class AseButtonComponent {

  public onClick = output<void>();

  public handleClick(event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.onClick.emit();
  }
}
