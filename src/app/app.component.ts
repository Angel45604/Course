import { Component, OnInit, OnLoad, AfterViewInit } from '@angular/core';
import CoursesJson from '../app/common/courses.json';
import {Course} from './models/course';
import {ColorScheme} from './models/ColorScheme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnLoad, AfterViewInit {
  title = 'CourseWeb';
  panelOpenState = false;
  
  coursesJ: Array<Course> = [];
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
    let str1 = 'course-category-megustanlosmemes';
    let str2 = str1.split('-');
    console.log('str2', str2[str2.length-1])
    let li;
    
    for(let i = 0; i< CoursesJson.courses.length; i++ ) {
      this.coursesJ.push(CoursesJson.courses[i]);
      //ul =(document.getElementsByClassName('course-category-'+CoursesJson.courses[i].category));
      //for(let j = 0; j < ul.length; j++) {
        //console.log('aaaa',)
      //}
    }
    console.log(this.coursesJ);

  }

}
