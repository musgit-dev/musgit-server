import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PracticeService } from '../../services/practice.service';

@Component({
  selector: 'app-practice-list',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './practice-list.component.html',
  styleUrl: './practice-list.component.css',
})
export class PracticeListComponent {
  service = inject(PracticeService);
  practices$ = this.service.getPractices();
}
