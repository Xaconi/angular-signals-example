import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AseLayoutComponent } from './core/ase-layout/ase-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AseLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signals-example';
}
