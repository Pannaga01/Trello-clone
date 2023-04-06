import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../+state/tasks.models';
import { StateSelector } from '../+state/tasks.selectors';
import { Task } from '../../Task';
import * as TasksActions from '../+state/tasks.actions'
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'angular-nx-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {

  @Input() task!:Task;

  faPen = faPen;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output() onEditTask: EventEmitter<{task:Task,previousTitle:string}> = new EventEmitter();

  constructor(public dialog:MatDialog){
  }

  onDelete(){
    //console.log(this.task)
    this.onDeleteTask.emit(this.task);
  }

  onEdit(): void {

    const previousTitle = this.task.taskName;

    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {task:{...this.task}},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //console.log(result)
      this.task = result;
      const object = passtheEdit();
      //console.log(object);
      this.onEditTask.emit(object);
    });

    const passtheEdit = () =>{
      const object = {
        task:this.task,
        previousTitle:previousTitle
      }
  
      return object;
      
    }


    

  }
  
}
