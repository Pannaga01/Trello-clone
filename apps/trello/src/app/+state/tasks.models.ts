import { Task } from "../../Task";
import { List } from "../../Task";
/**
 * Interface for the 'Tasks' data
 */
export interface tasksState {
  [listName:string]:List
}

export interface AppState{
  readonly taskStore : tasksState;
}






