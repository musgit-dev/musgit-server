import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceCatalogComponent } from './piece-catalog.component';

describe('PieceCatalogComponent', () => {
  let component: PieceCatalogComponent;
  let fixture: ComponentFixture<PieceCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieceCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PieceCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
