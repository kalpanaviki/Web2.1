import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonodonComponent } from './monodon.component';

describe('MonodonComponent', () => {
  let component: MonodonComponent;
  let fixture: ComponentFixture<MonodonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonodonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonodonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
