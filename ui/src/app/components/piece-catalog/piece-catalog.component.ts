import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, inject, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PieceService } from './../../services/piece.service';
import { PieceComponent, PieceInfoComponent } from './../piece/piece.component';
import { Piece } from './../../models/piece.model';

@Component({
  selector: 'catalog',
  imports: [
    PieceComponent,
    PieceInfoComponent,
    AsyncPipe,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    @for (p of pieces; track p) {
      <piece-info [p]="p" />
    }
  `,
})
export class PieceCatalogComponent {
  pieces: Piece[] = [];
  pieceService = inject(PieceService);
  practicedPiece!: string;
  @Output() practiceStarted = new EventEmitter<string>();
  @Output() practiceCompleted = new EventEmitter<string>();

  constructor() {
    this.pieceService.getPieces().subscribe((pieces) => (this.pieces = pieces));
  }
}
