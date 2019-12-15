import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/project';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  projectForm: FormGroup;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.projects;
    this.projectForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.projectForm.value);
    const {title} = this.projectForm.value;
    this.projectService.addProject(title);
    this.projectForm.reset();
  }

}
