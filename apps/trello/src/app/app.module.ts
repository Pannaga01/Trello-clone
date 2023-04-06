import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Task } from '../Task';
import { FormsModule } from '@angular/forms';
//import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
//import { CardGridComponent } from './card-grid/card-grid.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromTasks from './+state/tasks.reducer';
//import { TasksEffects } from './+state/tasks.effects';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TASKS_FEATURE_KEY } from './+state/tasks.reducer';
import { tasksReducer } from './+state/tasks.reducer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { TasksDragComponent } from './tasks-drag/tasks-drag.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    //CardGridComponent,
    TasksComponent,
    TaskItemComponent,
    EditDialogComponent,
    //TasksDragComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    FormsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ taskStore: tasksReducer }, {}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TasksComponent,
    TaskItemComponent,
    EditDialogComponent,
    //TasksDragComponent,
  ],
})
export class AppModule {}
