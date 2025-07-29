import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PieceCatalogComponent } from './components/piece-catalog/piece-catalog.component';
import { PieceComponent } from './components/piece/piece.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, PieceComponent, PieceCatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Musgit';
}
