import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule,StoreFeatureModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../+state/tasks.models';
import { List, Task } from '../../Task';
import * as TasksActions from '../+state/tasks.actions';
import { TasksComponent } from './tasks.component';
import { By } from '@angular/platform-browser';
import { TaskItemComponent } from '../task-item/task-item.component';
import { EffectsModule } from '@ngrx/effects';
import { tasksReducer } from '../+state/tasks.reducer';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let store: MockStore<AppState>;
  const mockTask:Task = {taskName:'test',deadline:new Date('2023-03-17T10:34:28.579Z')};
  const initialState ={ "new tasks":{title:"new tasks", tasks:[]}}
  
  let mockList:string = 'mockList';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent,TaskItemComponent],
      imports:[StoreModule.forRoot({ taskStore: tasksReducer }, {}),
              StoreRouterConnectingModule.forRoot()],
      providers:[
          provideMockStore({initialState})  // use test store instead of ngrx store
          //{ provide:MockStore, useValue:store}
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('select the state',()=>{

    // let addTaskBtn = fixture.debugElement.query(By.css('.add-task-btn')).nativeElement;
    // addTaskBtn.click();

    const storeSpy = jest.spyOn(store, 'select');

    component.ngOnInit();
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);

  })

  it('dispact the task to add',()=>{

    // const list:List = {title:'a list', tasks:[]} 

    // fixture.detectChanges();

    // let addTaskBtn = fixture.debugElement.query(By.css('.add-task-btn')).nativeElement;
    // addTaskBtn.click();

    const storeSpy = jest.spyOn(store, 'dispatch');

    component.onAddTask(mockTask.taskName,mockList);
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);
    // expect(storeSpy).toHaveBeenCalledWith(
    //   TasksActions.AddTask({ task: mockTask, listName: mockList })
    // );
  })



});
