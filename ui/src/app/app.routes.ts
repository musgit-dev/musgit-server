import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PieceCatalogComponent } from './components/piece-catalog/piece-catalog.component';
import { PieceComponent } from './components/piece/piece.component';
import { ComposerComponent } from './components/composer/composer.component';
import { PracticeListComponent } from './components/practice-list/practice-list.component';

export const routes: Routes = [
  { path: 'pieces', component: PieceCatalogComponent, title: 'Pieces' },
  { path: 'pieces/:id', component: PieceComponent, title: 'Piece' },
  { path: 'composers', component: ComposerComponent, title: 'Composers' },
  { path: 'practices', component: PracticeListComponent, title: 'Practices' },
  // { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];
