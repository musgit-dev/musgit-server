import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Piece } from '../models/piece.model';
import { Practice } from '../models/practice.model';

@Injectable({
  providedIn: 'root',
})
export class PieceService {
  constructor(private http: HttpClient) {}

  getPieces() {
    return this.http.get<Piece[]>('api/pieces');
  }
  getPiece(id: string) {
    return this.http.get<Piece>(`api/pieces/${id}`);
  }
  getPiecePractices(id: string) {
    return this.http.get<Practice[]>(`api/pieces/${id}/practices`);
  }

  practicePiece(pieceId: string) {
    return this.http.post(`api/practices`, { piece_id: pieceId });
  }
  completePractice(practiceId: string, evalutation?: string) {
    return this.http.post(`api/practices/${practiceId}:complete`, {});
  }
}
