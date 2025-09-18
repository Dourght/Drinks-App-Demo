import {Routes} from '@angular/router';
import {DrinksOverview} from './components/drinks-overview/drinks-overview';

export const routes: Routes = [
  { path: '', redirectTo: 'drinks', pathMatch: 'full', title: 'Drink App' },
  { path: 'drinks', component: DrinksOverview, title: 'Drinks Overview'  },
  { path: '**', component: DrinksOverview, title: 'Drinks Overview'  },
];
