import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Task} from '../../models/task';

@Component({
  selector: 'app-tasks-of-project',
  templateUrl: './tasks-of-project.component.html',
  styleUrls: ['./tasks-of-project.component.css']
})
export class TasksOfProjectComponent implements OnInit {
  tasks: Task[];
  title;

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      for (const project of this.projectService.projects) {
        if (project.id == params.id) {
          this.tasks = project.tasks.sort((a, b) => a.priority - b.priority );
          this.title = project.title;
        }
      }
    });
  }
  getProjectIdByTitle(title) {
    return this.projectService.getProjectIdByTitle(title);
  }

}
