import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AmiiboComponent } from './features/amiibo/amiibo.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'item/:amiiboId',
    component: AmiiboComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
