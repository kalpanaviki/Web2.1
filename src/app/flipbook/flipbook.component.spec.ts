import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipbookComponent } from './flipbook.component';

describe('FlipbookComponent', () => {
  let component: FlipbookComponent;
  let fixture: ComponentFixture<FlipbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipbookComponent]
    });
    fixture = TestBed.createComponent(FlipbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
