import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, tasksState } from '../+state/tasks.models';
import { StateSelector } from '../+state/tasks.selectors';
import { List, Task } from '../../Task';
import * as TasksActions from '../+state/tasks.actions';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'angular-nx-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  
  listTitle: string = 'new tasks';

  list!: List;
  lists!:List[];
  listNames:string[] = ['new tasks'];

  connected(listTitle:string){
    return this.lists.filter(list=>list.title!==listTitle).map(list=>list.title);
  }

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(StateSelector).subscribe((state) => {
      //console.log(this.listTitle);
      this.list = state[this.listTitle]
      this.lists = Object.values(state);

      // for (let list of this.lists ){
      //   this.listNames.push(list.title);
      // }
      //console.log(this.list);
    });
  }

  onAddList(){
    const newList:List = {
      title:this.listTitle,
      tasks:[]
    }
    this.listNames.push(this.listTitle);
    //console.log(this.listNames);
    this.store.dispatch(TasksActions.AddList({list:newList}));  
  }

  onAddTask(taskName:string,listName:string) {
    const task: Task = {
      taskName: taskName,
      deadline: new Date(),
    };

    //console.log(task,listName);

    this.store.dispatch(
      TasksActions.AddTask({ task: task, listName: listName })
    );
  }

  deleteTask(task: Task,listName:string ) {
    //this.list.tasks.filter((t) => t.taskName != task.taskName);
    this.store.dispatch(
      TasksActions.DeleteTask({
        taskName: task.taskName,
        listName: listName,
      })
    );
    //window.location.reload();
  }

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      console.log(true)
       moveItemInArray([...event.container.data], event.previousIndex, event.currentIndex);
     } else {
      transferArrayItem([...event.previousContainer.data],
                         [...event.container.data],
                         event.previousIndex,
                         event.currentIndex);
      this.onAddTask(event.item.data.taskName, event.container.id);
      this.deleteTask(event.item.data,event.previousContainer.id);

     }
    
  }

  editTask(object: { task: Task; previousTitle: string }, listName:string) {
    //console.log(object);
    this.store.dispatch(
      TasksActions.EditTask({
        task: object.task,
        previousTitle: object.previousTitle,
        listTitle: listName,
      })
    );
  }
}
