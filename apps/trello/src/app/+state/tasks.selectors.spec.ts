
import { AppState, tasksState } from './tasks.models';
import {
  initialTasksState,
} from './tasks.reducer';
import * as TasksSelectors from './tasks.selectors';

describe('Tasks Selectors', () => {

  const state = initialTasksState;

  const createDataState = (): tasksState => ({
    "new tasks":{title:"new tasks", tasks:[]}
  });
  
  const createState = (): AppState => ({
    taskStore: createDataState()
  });

  describe('Tasks Selectors', () => {
    it('should return state', () => {
      const state = createState();
      const results = TasksSelectors.StateSelector(state);
      expect(results).toBe(state.taskStore);
    });

  })

})
