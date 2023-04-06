import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';

import * as TasksActions from './tasks.actions';
import { tasksState } from './tasks.models';

export const TASKS_FEATURE_KEY = 'taskStore';


export const initialTasksState: tasksState = {
  "new tasks":{title:"new tasks", tasks:[]}
}
  

const reducer = createReducer(
  initialTasksState,
   on(TasksActions.AddList, (state,action)=>{
     return {...state,[action.list.title]:action.list }
   }),
  on(TasksActions.AddTask, (state, action) => {
    console.log(action.listName in state);
    if(action.listName in state){
      //console.log(action.task,action.listName);
      let newState = [...state[action.listName].tasks];
      newState.push({...action.task});
      return {...state, [action.listName] : {title:action.listName, tasks:newState}  }
    }
    else return {...state}
    
  }),
  on(TasksActions.DeleteTask, (state, action) => {
    if(action.listName in state){
    let DeleteTasks = [...state[action.listName].tasks]
    DeleteTasks = DeleteTasks.filter((t) => t.taskName != action.taskName)
    return {...state, [action.listName] : {title:action.listName, tasks:DeleteTasks}};
    }
    else{
      return {...state}
    }
  }),
  on(TasksActions.EditTask,(state,action)=>{
    if(action.listTitle in state){
    let newState = [...state[action.listTitle].tasks];
    for (const aTask of newState){
      if (aTask.taskName === action.previousTitle){
        newState.splice(newState.indexOf(aTask),1);
      }
    }
    newState.push({...action.task});
    return {...state, [action.listTitle] : {title:action.listTitle, tasks:newState}  }
    }
    else return {...state}
  })
  )


export function tasksReducer(state: any, action: Action):tasksState {
  return reducer(state, action);
}

