import { act } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as TasksActions from './tasks.actions';
import { tasksState } from './tasks.models';
import * as fromReducer from './tasks.reducer';

describe('Tasks Reducer', () => {
  
  let state = fromReducer.initialTasksState;
  let task = {taskName:'a task',deadline: new Date()};
  let listName='listName';

  describe('add list', () => {
    it('add list', () => {

      const list = {title:'listName',tasks:[]}

      const action = TasksActions.AddList({ list });

      const result: tasksState = fromReducer.tasksReducer(fromReducer.initialTasksState, action);

      expect(Object.keys(result).length).toBe(Object.keys(state).length+1);
    });
  });

 
    it('add task', () => {
      
      const action = TasksActions.AddTask({ task,listName:listName });

      const result: tasksState = fromReducer.tasksReducer(fromReducer.initialTasksState, action);

      if (listName in Object.keys(state)){
        expect(result[listName].tasks.length).toBe(state[listName].tasks.length-1);
      }

      else {
        expect(result).toStrictEqual(state);
      }
     
    });

    it('delete task', () => {

      const action = TasksActions.DeleteTask({ taskName:'a task',listName:listName });

      const result: tasksState = fromReducer.tasksReducer(fromReducer.initialTasksState, action);

      if (listName in Object.keys(state)){
        expect(result[listName].tasks.length).toBe(state[listName].tasks.length-1);
      }

      else {
        expect(result).toStrictEqual(state);
      }
      
    });

    it('edit task', () => {

      const action = TasksActions.EditTask({ task:task,listTitle:listName,previousTitle:'previous'});
      
      const result: tasksState = fromReducer.tasksReducer(fromReducer.initialTasksState, action);

      console.log(result);

      if (listName in Object.keys(state)){
        expect(result[listName].tasks.length).toBe(state[listName].tasks.length);
      }

      else {
        expect(result).toStrictEqual(state);
      }
      

    });

  });

