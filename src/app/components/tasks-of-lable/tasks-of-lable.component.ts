import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-tasks-of-lable',
  templateUrl: './tasks-of-lable.component.html',
  styleUrls: ['./tasks-of-lable.component.css']
})
export class TasksOfLableComponent implements OnInit {
  tasks: Task[] = [];
  title;

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      for (const lable of this.projectService.lables) {
        if (lable.id == params.id) {
          this.title = lable.title;
          for (const task of this.projectService.getTasks()) {
            for (let i = 0; i < task.lables.length; i++) {
              if (task.lables[i].title == lable.title) {

                if (!this.tasks.includes(task)) {
                  this.tasks.push(task);
                }
              }
            }
          }
          // this.tasks = lable.tasks.sort((a, b) => a.priority - b.priority );
          // this.title = lable.title;
        }
      }
      this.tasks = this.tasks.sort((a, b) => a.priority - b.priority );
    });
  }
  getProjectIdByTitle(title) {
    return this.projectService.getProjectIdByTitle(title);
  }
}
