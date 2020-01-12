import { Component, OnInit, AfterViewInit } from '@angular/core';
import CoursesJson from '../app/common/courses.json';
import {Course} from './models/course';
import {ColorScheme} from './models/ColorScheme';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public router: Router) {
    
  }

}
