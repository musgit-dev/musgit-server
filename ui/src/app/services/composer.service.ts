import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Composer } from '../models/composer.model';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  constructor(private http: HttpClient) {}

  getComposers() {
    return this.http.get<Composer[]>('api/composers');
  }
  getComposer(id: string) {
    return this.http.get<Composer>(`api/composers/${id}`);
  }
}
