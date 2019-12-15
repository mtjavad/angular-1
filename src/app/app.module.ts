import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksOfProjectComponent } from './components/tasks-of-project/tasks-of-project.component';
import { LablesComponent } from './components/lables/lables.component';
import { TasksOfLableComponent } from './components/tasks-of-lable/tasks-of-lable.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    ProjectsComponent,
    TasksOfProjectComponent,
    LablesComponent,
    TasksOfLableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DpDatePickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
