import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EManualComponent } from './e-manual.component';

describe('EManualComponent', () => {
  let component: EManualComponent;
  let fixture: ComponentFixture<EManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EManualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
