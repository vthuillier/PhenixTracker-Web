import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

function getTitleName(page: string) {
  return `PhenixTracker - ${page}`;
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: getTitleName("Page d'accueil")
  }
];
