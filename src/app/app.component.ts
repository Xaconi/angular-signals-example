import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AseLayoutComponent } from './core/ase-layout/ase-layout.component';

import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AseLayoutComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-signals-example';
}
