import { Action, createAction, props } from '@ngrx/store';
import { List, Task } from '../../Task';
import { tasksState } from './tasks.models';


export const AddTask = createAction(
  '[TASK] Add',
  props<{ task:Task, listName:string}>()
);

export const AddList = createAction(
  '[LIST] Add',
  props<{ list:List}>()
);

export const DeleteTask = createAction(
  '[TASK] Delete',
  props<{ taskName:string, listName:string}>()
);

export const EditTask = createAction(
  '[TASK] Edit',
  props<{ task:Task, previousTitle:string, listTitle:string}>()
);

