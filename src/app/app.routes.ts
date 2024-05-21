import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AmiiboComponent } from './features/amiibo/amiibo.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { revalidate: 10 }
  },
  {
    path: 'item/:amiiboId',
    component: AmiiboComponent,
    data: { revalidate: 10 }
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
