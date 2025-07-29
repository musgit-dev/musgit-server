import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  inject,
} from '@angular/core';
import { Piece } from './../../models/piece.model';
import { Practice } from './../../models/practice.model';
import { PieceService } from '../../services/piece.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'practice-btn',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  template: `
    <div class="practice-btn">
      @if (p.practiced) {
        <button (click)="stopPractice()">Stop Practice</button>
      } @else {
        <button (click)="startPractice()">Start Practice</button>
      }
    </div>
  `,
  styleUrl: './piece.component.css',
})
export class PracticeButtonComponent {
  private service = inject(PieceService);
  @Input() p: Piece;
  @Output() practiceStarted = new EventEmitter<string>();
  @Output() practiceCompleted = new EventEmitter<string>();

  startPractice() {
    this.service.practicePiece(this.p.id).subscribe(
      (result) => {
        this.practiceStarted.emit(this.p.id);
      },
      (error) => {
        console.log('Practice already started');
      },
    );
  }
  stopPractice() {
    this.service.completePractice(this.p.currentPractice).subscribe(
      (result) => {
        this.practiceCompleted.emit(this.p.id);
      },
      (error) => {
        console.log('Practice already completed');
      },
    );
  }
}

@Component({
  selector: 'piece',
  standalone: true,
  imports: [AsyncPipe, PracticeButtonComponent],
  styleUrl: './piece.component.css',
  template: `
    <div class="practice-div">
      <h2>{{ p.name }}</h2>
      <div class="practice-btn">
        Practiced <strong>{{ practices.length }}</strong> times
      </div>
    </div>
    <p>
      <em>{{ p.composer }}</em>
    </p>
    <practice-btn [p]="p" />
    @for (practice of practices; track $index) {
      <tr>
        <td>{{ $index }}</td>
        <td>
          {{ practice.startDate }} -
          {{ practice.endDate }}
        </td>
      </tr>
    }
  `,
})
export class PieceComponent implements OnInit {
  @Input() id!: string;
  private service = inject(PieceService);
  p: Piece;
  practices: Practice[] = [];

  ngOnInit() {
    this.service.getPiece(this.id).subscribe((piece) => (this.p = piece));
    this.service
      .getPiecePractices(this.id)
      .subscribe((practices) => (this.practices = practices));
  }
}

@Component({
  selector: 'piece-info',
  standalone: true,
  imports: [AsyncPipe, RouterLink, PracticeButtonComponent],
  template: `
    <div class="piece-info">
      <div class="left">
        <a routerLink="{{ p.id }}">{{ p.name }}</a>
      </div>
      <div class="center">{{ p.composer }}</div>
      <practice-btn [p]="p" />
    </div>
  `,
  styleUrl: './piece.component.css',
})
export class PieceInfoComponent {
  private service = inject(PieceService);
  @Input() p: Piece;
}
