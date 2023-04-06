import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { TaskItemComponent } from './task-item.component';
import { first, of } from 'rxjs';
import { Task } from '../../Task';


fdescribe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  let mockTask:Task= {taskName:'test',deadline:new Date()};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
      imports:[MatButtonModule,MatDialogModule,BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the deleted task',() =>{
    component.onDeleteTask.pipe(first()).subscribe((task: Task) => expect(task).toBe(mockTask));
    component.onDelete;
  });

  it('should open an edit dialog box',async()=>{

    component.task = mockTask;

    fixture.detectChanges();

    let icon = fixture.debugElement.query(By.css('.editFaIcon')).nativeElement;
     icon.click();

     fixture.whenStable().then(() => {
       expect(component.onEdit).toHaveBeenCalled();
     });

     fixture.detectChanges();

    //const result = jest.spyOn(component.dialog, 'open');

    const mockObj = {
      previousTitle: mockTask.taskName,
      task : {title:'tester', deadline:new Date()}
    }

    component.onEditTask.pipe(first()).subscribe(obj=> expect(obj).toBe(mockObj));
    component.onEdit;

  })


});
