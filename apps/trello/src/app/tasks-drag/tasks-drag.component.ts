import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { List, Task } from '../../Task';

@Component({
  selector: 'angular-nx-tasks-drag',
  templateUrl: './tasks-drag.component.html',
  styleUrls: ['./tasks-drag.component.scss'],
})
export class TasksDragComponent {
  new_tasks:Task[]= [{taskName:'review 1',deadline:new Date()},{taskName:'review 3',deadline:new Date()}];
  on_going:Task[] = [{taskName:'review 2',deadline:new Date()},{taskName:'review 4',deadline:new Date()}];

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event.previousContainer,event.container)
    if (event.previousContainer === event.container) {
      console.log(true)
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     } else {
      transferArrayItem(event.previousContainer.data,
                         event.container.data,
                         event.previousIndex,
                         event.currentIndex);
     }
  }


}
