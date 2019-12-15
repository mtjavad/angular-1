import {Component, OnInit} from '@angular/core';
import * as moment from 'jalali-moment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from './services/project.service';
import {Task} from './models/task';
import {ActivatedRoute, Route, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoList';
  dateObject = '';
  myConfig = {
    min: moment()
  };
  taskForm: FormGroup;
  myDirFlag = '';
  myDate = new Date();
  year;
  month;
  day;
  week;
  oneDayAfter;
  oneWeekAfter;
  jalaliOneDayAfter;
  jalaliOneWeekAfter;
  tasks: Task[] = [];

  constructor(private projectService: ProjectService, private router: Router, private activatedRoute: ActivatedRoute) {
    // this.year = this.myDate.getFullYear();
    // this.month = this.myDate.getMonth() + 1;
    // this.day = this.myDate.getDay() + 1;
    // // this.week = this.myDate.getDay() + 7;
    // this.oneDayAfter = this.year + '-' + this.month + '-' + this.day;
    // // this.oneWeekAfter = this.year + '-' + this.month + '-' + this.week;
    // this.jalaliOneDayAfter = moment(this.oneDayAfter, 'YYYY-MM-DD').locale('fa').format('YYYY-MM-DD');
    // this.jalaliOneWeekAfter = moment(this.oneWeekAfter, 'YYYY-MM-DD').locale('fa').format('YYYY-MM-DD');
    // console.log(this.oneDayAfter);
    // console.log(this.jalaliOneDayAfter);
  }

  ngOnInit(): void {
  //   this.taskForm = new FormGroup({
  //     title: new FormControl(null, [Validators.required]),
  //     project: new FormControl(null, [Validators.required]),
  //     lables:  new FormControl(null),
  //     deadline:  new FormControl(null),
  //     priority:  new FormControl(null),
  //   });
  //   // this.activatedRoute.queryParams.subscribe((params) => {
  //   //   if (params.mode === 'week') {
  //   //     this.myDirFlag = 'week';
  //   //   } else {
  //   //     this.myDirFlag = '';
  //   //   }
  //   // });
  //   // this.tasks = [];
  }

  // getTasks() {
  //   // return this.projectService.getTasks()
  //   this.tasks = [];
  //   if (this.myDirFlag === 'week') {
  //     for (const task of this.projectService.getTasks()) {
  //       if (task.deadline < this.jalaliOneWeekAfter) {
  //         if (!this.tasks.includes(task)) {
  //           this.tasks.push(task);
  //         }
  //       }
  //     }
  //   } else {
  //     for (const task of this.projectService.getTasks()) {
  //       if (task.deadline < this.jalaliOneDayAfter) {
  //         if (!this.tasks.includes(task)) {
  //           this.tasks.push(task);
  //         }
  //       }
  //     }
  //   }
  //   return this.tasks;
  // }

  onSubmit() {
    this.taskForm.patchValue({
      deadline: this.dateObject
    });
    const {title,  project, lables, deadline, priority} = this.taskForm.value;
    this.projectService.pushTaskToProjectAndLable(title,  project, lables, deadline, priority);
    this.taskForm.reset();
  }
  myRout() {
    this.router.navigate(['/home'], {queryParams: {mode: 'week'}});
  }
  // getProjectIdByTitle(title) {
  //   return this.projectService.getProjectIdByTitle(title);
  // }
}
