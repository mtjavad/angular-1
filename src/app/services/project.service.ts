import { Injectable } from '@angular/core';
import {Task} from '../models/task';
import {Project} from '../models/project';
import {Lable} from '../models/lable';
import {ActivatedRoute, Params} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  tasks: Task[] = [];
  taskId = 0;
  projectId = 0;
  lableId = 0;
  myObject: {title, color}[] = [];
  // projects: Project[] = [{id: this.projectId++, title: 'پیش فرض', tasks: []}, {id: this.projectId++, title: 'پیش فرض 2', tasks: []}];
  // lables: Lable[] = [{id: this.lableId++, title: 'پیش فرض', tasks: [], color: 'greenyellow'}, {id: this.lableId++, title: 'پیش فرض2', tasks: [], color: 'deepskyblue'}, {id: this.lableId++, title: 'پیش فرض3', tasks: [], color: 'yellow'}, {id: this.lableId++, title: 'پیش فرض4', tasks: [], color: 'red'}];
  projects: Project[] = [{id: this.projectId++, title: 'پیش فرض', tasks: []}, ];
  lables: Lable[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  pushTaskToProjectAndLable(title, project, lables, deadline, priority) {
    if (lables != null) {
      for (const selectedLable of lables) {
        for (const searchLable of this.lables) {
          if (searchLable.title === selectedLable) {
            this.myObject.push({title: selectedLable, color: searchLable.color});
          }
        }
      }
    }
    const newTask = new Task(this.taskId++, title, project, this.myObject, deadline, priority);
    for (const searchProject of this.projects) {
      if (searchProject.title === project) {
        searchProject.tasks.push(newTask);
      }
    }
    if (lables != null) {
      for (const selectedLable of lables) {
        for (const searchLable of this.lables) {
          if (searchLable.title === selectedLable) {
            searchLable.tasks.push(newTask);
          }
        }
      }
    }
    this.myObject = [];
  }
  getTasks() {
    this.tasks = [];
    for (const searchProject of this.projects) {
      for ( const task of searchProject.tasks) {
        if (!this.tasks.includes(task)) {
          this.tasks.push(task);
        }
      }
    }
    return this.tasks;
  }

  addProject(title) {
    for (const searchProject of this.projects) {
      if (searchProject.title === title) {
        return;
      }
    }
    const newProject = new Project(this.projectId++, title);
    this.projects.push(newProject);
  }
  addLable(title, color) {
    for (const searchLable of this.lables) {
      if (searchLable.title === title) {
        return;
      }
    }
    const newLable = new Lable(this.lableId++, title, color);
    this.lables.push(newLable);
  }
  getTaskByParamsId() {
    this.activatedRoute.params.subscribe((params: Params) => {
      for (const searchProject of this.projects) {
        if (searchProject.id === params.id) {
          for (const searchTask of searchProject.tasks) {
            if (searchTask.id === params.id2) {
              return searchTask;
            }
          }
        }
      }
    });
  }
  getProjectByParamsId() {
    this.activatedRoute.params.subscribe((params: Params) => {
      for (const searchProject of this.projects) {
        if (searchProject.id === params.id) {
          return searchProject;
        }
      }

    });
  }
  getLableByParamsId() {
    this.activatedRoute.params.subscribe((params: Params) => {
      for (const searchLable of this.lables) {
        if (searchLable.id === params.id) {
          return searchLable;
        }
      }

    });
  }
  getProjectIdByTitle(title) {
    for (const searchProject of this.projects) {
      if (searchProject.title === title) {
        return searchProject.id;
      }
    }
  }
  updateTask(oldTitle, oldProject, oldLables, oldDeadline, oldPriority, oldTaskID, newTitle, newProject, newLables, newDeadline, newPriority) {

    for (const selectedLable of newLables) {
      for (const searchLable of this.lables) {
        if (searchLable.title === selectedLable) {
          this.myObject.push({title: selectedLable, color: searchLable.color});
        }
      }
    }

    const updatedTask = new Task(oldTaskID, newTitle, newProject, this.myObject, newDeadline, newPriority);
    for (const searchProject of this.projects) {
      if (searchProject.title === oldProject) {
        for (let searchTask of searchProject.tasks) {
          if (searchTask.title === oldTitle) {
            searchProject.tasks.splice(searchProject.tasks.indexOf(searchTask), 1);
            // searchTask = updatedTask;
          }
        }
      }
    }
    for (const selectedLable of oldLables) {
      for (const searchLable of this.lables) {
        if (searchLable.title === selectedLable) {
          for (let searchTask of searchLable.tasks) {
            if (searchTask.title === oldTitle) {
              searchLable.tasks.splice(searchLable.tasks.indexOf(searchTask), 1);
              // searchTask = updatedTask;
            }
          }
        }
      }
    }
    // for (const selectedLable of newLables) {
    //   for (const searchLable of this.lables) {
    //     if (searchLable.title === selectedLable) {
    //       this.myObject.push({title: selectedLable, color: searchLable.color});
    //     }
    //   }
    // }
    // const newTask = new Task(this.taskId++, newTitle, newProject, this.myObject, newDeadline, newPriority);
    for (const searchProject of this.projects) {
      if (searchProject.title === newProject) {
        searchProject.tasks.push(updatedTask);
      }
    }
    for (const selectedLable of newLables) {
      for (const searchLable of this.lables) {
        if (searchLable.title === selectedLable) {
          searchLable.tasks.push(updatedTask);
        }
      }
    }
    this.myObject = [];
  }

}
