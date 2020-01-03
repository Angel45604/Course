import { Component, OnInit, AfterViewInit } from '@angular/core';
import CoursesJson from '../app/common/courses.json';
import {Course} from './models/course';
import {ColorScheme} from './models/ColorScheme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'CourseWeb';
  panelOpenState = false;
  
  coursesJ1: Array<Course> = [];
  coursesJ2: Array<Course> = [];
  coursesJ3: Array<Course> = [];
  course1: Course;
  
  colors = {
    "CONCEPTOS_BASICOS":"#FF2EC4",
    "CONTROL_DE_VERSIONES":"#2EFCFF",
    "JAVA":"#FF902E",
    "PYTHON":"#FF5900",
    "CSHARP":"#FCFF2E",
    "JAVASCRIPT":"#E1F00",
    "DESARROLLO_WEB":"#FF2E2E",
    "DESARROLLO_MOVIL":"#00E32A",
    "DESARROLLO_MULTIPLATAFORMA":"#2E38FF",
    "BASES_DE_DATOS":"#AB5722",
    "INTELIGENCIA_ARTIFICIAL":"#AB2EFF",
    "CLOUD_COMPUTING_SERVICES":"#FFD32E"
  }

  setColor() {

  }



  ngOnChanges() {
    

  }

  ngAfterViewInit() {
    let ul = document.getElementsByClassName('course-category');
    for(let i = 0; i < ul.length; i++) {
      let li = ul[i].getElementsByTagName('li');
      for(let j = 0; j < li.length; j++) {
        
        li[j].style.backgroundImage = `linear-gradient(
          90deg,
          ${this.colors[li[j].className.split('-')[li[j].className.split('-').length-1]]} 10px,
          #EEE 10px,
          #EEE 11px,
          transparent 11px)`;
          console.log(li[j].className);
      }
    }
  }

  ngOnInit() {
    //console.log(CoursesJson.courses);

    let count = 1;
    for(let i = 0; i< CoursesJson.courses.length; i++ ) {
      //this.coursesJ.push(CoursesJson.courses[i]);
      if(count == 1) {
        this.coursesJ2.push(CoursesJson.courses[i]);
      } else if(count == 2) {
        this.coursesJ3.push(CoursesJson.courses[i]);
      } else {
        this.coursesJ1.push(CoursesJson.courses[i]);
      }
      count++;
      if(count > 3 ) {
        count = 1;
      }
    }

    console.log(this.coursesJ1);
    console.log(this.coursesJ2);
    console.log(this.coursesJ3);

  }

}
