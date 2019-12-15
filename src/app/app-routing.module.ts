import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TaskComponent} from './components/task/task.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {LablesComponent} from './components/lables/lables.component';
import {TasksOfProjectComponent} from './components/tasks-of-project/tasks-of-project.component';
import {TasksOfLableComponent} from './components/tasks-of-lable/tasks-of-lable.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects/:id/:id2', component: TaskComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: TasksOfProjectComponent},
  {path: 'labels', component: LablesComponent},
  {path: 'labels/:id', component: TasksOfLableComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
