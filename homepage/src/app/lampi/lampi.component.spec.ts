import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampiComponent } from './lampi/lampi.component';

describe('LampiComponent', () => {
  let component: LampiComponent;
  let fixture: ComponentFixture<LampiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LampiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LampiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
