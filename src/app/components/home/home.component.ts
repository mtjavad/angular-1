import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'jalali-moment';
import {Task} from '../../models/task';
import {Project} from '../../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dateObject = '';
  myConfig;
  myDate;
  taskForm: FormGroup;
  myDirFlag = '';
  year;
  month;
  day;
  week;
  oneDayAfter;
  oneWeekAfter;
  jalaliOneDayAfter;
  jalaliOneWeekAfter;
  tasks: Task[] = [];
  projects: Project[];

  constructor( private activatedRoute: ActivatedRoute, private projectService: ProjectService) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.mode === 'week') {
        this.myDirFlag = 'week';
      } else {
        this.myDirFlag = '';
      }
    });
  }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      project: new FormControl(null, [Validators.required]),
      lables:  new FormControl(''),
      deadline:  new FormControl(''),
      priority:  new FormControl(''),
    });
    this.myConfig = {
      min: moment()
    };
    this.myDate = new Date();
    this.year = this.myDate.getFullYear();
    this.month = this.myDate.getMonth() + 1;
    this.day = this.myDate.getDate() + 1;
    this.week = this.myDate.getDate() + 7;
    this.oneDayAfter = this.year + '-' + this.month + '-' + this.day;
    this.oneWeekAfter = this.year + '-' + this.month + '-' + this.week;
    this.jalaliOneDayAfter = moment(this.oneDayAfter, 'YYYY-MM-DD').locale('fa').format('YYYY-MM-DD');
    this.jalaliOneWeekAfter = moment(this.oneWeekAfter, 'YYYY-MM-DD').locale('fa').format('YYYY-MM-DD');
    console.log( this.jalaliOneWeekAfter);
    this.projects = this.projectService.projects;
  }

  getTasks() {
    // return this.projectService.getTasks();
    // console.log('home comp');
    // console.log(this.projectService.projects);
    // console.log(this.tasks);
    this.tasks = [];
    if (this.myDirFlag === 'week') {
      for (const task of this.projectService.getTasks()) {
        // console.log(task.deadline < this.jalaliOneWeekAfter);
        if (task.deadline < this.jalaliOneWeekAfter) {
          // for (const myTask of this.tasks) {
          //   if (myTask.title !== task.title) {
          //     this.tasks.push(task);
          //   }
          // }
          if (!this.tasks.includes(task)) {
            this.tasks.push(task);
          }
        }
      }
    } else {
      for (const task of this.projectService.getTasks()) {
        // console.log('jalai  ' + this.jalaliOneDayAfter);
        // console.log('deadlin  ' + task.deadline);
        // console.log(task.deadline < this.jalaliOneDayAfter);
        if (task.deadline < this.jalaliOneDayAfter) {
          if (!this.tasks.includes(task)) {
            this.tasks.push(task);
          }
        }
      }
    }
    return this.tasks.sort((a, b) => a.priority - b.priority );
  }

  onSubmit() {

    this.taskForm.patchValue({
      deadline: this.dateObject
    });
    console.log(this.taskForm.value);
    console.log(this.dateObject);
    const {title,  project, lables, deadline, priority} = this.taskForm.value;
    this.projectService.pushTaskToProjectAndLable(title,  project, lables, deadline, priority);
    this.taskForm.reset();
    this.dateObject = '';
  }

  getProjectIdByTitle(title) {
    return this.projectService.getProjectIdByTitle(title);
  }
}
