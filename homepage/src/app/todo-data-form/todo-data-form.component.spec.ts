import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDataFormComponent } from './todo-data-form.component';

describe('TodoDataFormComponent', () => {
  let component: TodoDataFormComponent;
  let fixture: ComponentFixture<TodoDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
