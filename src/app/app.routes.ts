import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { ComicsComponent } from './pages/comics/comics.component';
//import { CharactersComponent } from './pages/characters/characters.component';
import path from 'path';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //{ path: 'comics', loadComponent: () => import('./pages/comics/comics.component').then(m => m.ComicsComponent) },
  //{ path: 'characters', loadComponent: () => import('./pages/characters/characters.component').then(m => m.CharactersComponent) },
 // { path: '**', redirectTo: 'home', pathMatch: 'full' } // Redirige a la página de inicio si la ruta no existe
];