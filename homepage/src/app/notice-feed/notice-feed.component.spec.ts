import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeFeedComponent } from './notice-feed.component';

describe('NoticeFeedComponent', () => {
  let component: NoticeFeedComponent;
  let fixture: ComponentFixture<NoticeFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
