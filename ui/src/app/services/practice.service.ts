import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Practice } from '../models/practice.model';

@Injectable({
  providedIn: 'root',
})
export class PracticeService {
  constructor(private http: HttpClient) {}

  getPractices() {
    return this.http.get<Practice[]>('api/practices');
  }
  getPractice(id: string) {
    return this.http.get<Practice>(`api/practices/${id}`);
  }
}
