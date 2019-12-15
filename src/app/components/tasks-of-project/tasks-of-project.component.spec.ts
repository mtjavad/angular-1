import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksOfProjectComponent } from './tasks-of-project.component';

describe('TasksOfProjectComponent', () => {
  let component: TasksOfProjectComponent;
  let fixture: ComponentFixture<TasksOfProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksOfProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
