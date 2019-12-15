import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Task} from '../../models/task';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task;
  showForm = false;
  dateObject = '';
  myConfig;
  myDate;
  taskForm: FormGroup;
  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute, private router: Router) {
    // this.task = {};
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      for (const searchProject of this.projectService.projects) {
        // console.log(searchProject);
        if (searchProject.id == params.id) {
          for (const searchTask of searchProject.tasks) {
            if (searchTask.id == params.id2) {
              this.task = searchTask;
            }
          }
        }
      }
    });
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   for (const task of this.projectService.getTasks()) {
    //     if (task.id == params.id2) {
    //       this.task = task;
    //     }
    //   }
    // });


    this.taskForm = new FormGroup({
      title: new FormControl(this.task.title, [Validators.required]),
      project: new FormControl(this.task.project, [Validators.required]),
      lables:  new FormControl(this.task.lables),
      deadline:  new FormControl(this.task.deadline),
      priority:  new FormControl(this.task.priority),
    });
    // this.dateObject = this.task.deadline;
    this.myConfig = {
      min: moment()
    };
    // console.log('single task');
    // console.log(this.projectService.projects);
    // console.log(this.projectService.getTasks());
    // console.log(this.task);
  }

  changeShowForm() {
    this.showForm = true;
  }

  onSubmit() {
    this.taskForm.patchValue({
      deadline: this.dateObject
    });
    const {title,  project, lables, deadline, priority} = this.taskForm.value;
    this.projectService.updateTask(this.task.title,  this.task.project, this.task.lables, this.task.deadline, this.task.priority, this.task.id, title,  project, lables, deadline, priority);
    this.taskForm.reset();
    this.ngOnInit();
    this.showForm = false;
    this.router.navigate(['/home']);
  }

}
