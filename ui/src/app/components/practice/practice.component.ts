import { Component } from '@angular/core';
import { Practice } from './../../models/practice.model';

@Component({
  selector: 'app-practice',
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css',
})
export class PracticeComponent {
  practice: Practice;

  constructor() {}
}
