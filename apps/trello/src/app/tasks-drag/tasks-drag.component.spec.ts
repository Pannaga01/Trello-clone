import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDragComponent } from './tasks-drag.component';

describe('TasksDragComponent', () => {
  let component: TasksDragComponent;
  let fixture: ComponentFixture<TasksDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksDragComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
