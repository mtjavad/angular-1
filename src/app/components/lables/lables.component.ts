import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Lable} from '../../models/lable';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lables',
  templateUrl: './lables.component.html',
  styleUrls: ['./lables.component.css']
})
export class LablesComponent implements OnInit {
  lables: Lable[];
  lableForm: FormGroup;
  myColor = ['سبز', 'آبی', 'زرد', 'قرمز', ];
  color = { "سبز": "greenyellow", "آبی": "deepskyblue", "زرد": "yellow", "قرمز": "red" };
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.lables = this.projectService.lables;
    this.lableForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.lableForm.value);
    const {title, color} = this.lableForm.value;
    this.projectService.addLable(title, color);
    this.lableForm.reset();
  }
}
