import { Component, OnInit, inject } from '@angular/core';
import { ComposerService } from '../../services/composer.service';
import { Composer } from '../../models/composer.model';

@Component({
  selector: 'app-composer',
  imports: [],
  templateUrl: './composer.component.html',
  styleUrl: './composer.component.css',
})
export class ComposerComponent implements OnInit {
  service = inject(ComposerService);
  composers: Composer[] = [];

  ngOnInit() {
    this.service.getComposers().subscribe((composers) => {
      this.composers = composers;
    });
  }
}
