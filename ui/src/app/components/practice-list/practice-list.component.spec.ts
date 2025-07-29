import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeListComponent } from './practice-list.component';

describe('PracticeListComponent', () => {
  let component: PracticeListComponent;
  let fixture: ComponentFixture<PracticeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
