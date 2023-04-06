import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASKS_FEATURE_KEY } from './tasks.reducer';
import { tasksState } from './tasks.models';

// Lookup the 'Tasks' feature state managed by NgRx
export const selectTasksState =
  createFeatureSelector<tasksState>(TASKS_FEATURE_KEY);


export const StateSelector = createSelector(
  selectTasksState,
  (state: tasksState) => state
);




