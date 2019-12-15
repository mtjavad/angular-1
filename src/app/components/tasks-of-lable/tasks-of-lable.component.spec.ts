import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksOfLableComponent } from './tasks-of-lable.component';

describe('TasksOfLableComponent', () => {
  let component: TasksOfLableComponent;
  let fixture: ComponentFixture<TasksOfLableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksOfLableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksOfLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
