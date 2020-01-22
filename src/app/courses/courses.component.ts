import { Component, OnInit, AfterViewInit } from '@angular/core';
import CoursesJson from '../../app/common/courses.json';
import {Course} from '../models/course';
import {ColorScheme} from '../models/ColorScheme';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  coursesJ1: Array<Course> = [];
  coursesJ2: Array<Course> = [];
  coursesJ3: Array<Course> = [];
  
  colors = {
    "CONCEPTOS_BASICOS":"#C2185B,#AD1457,#880E4F",
    "CONTROL_DE_VERSIONES":"#00796B,#00695C,#004D40",
    "JAVA":"#F57C00,#EF6C00,#E65100",
    "PYTHON":"#E64A19,#D84315,#BF360C",
    "CSHARP":"#AFB42B,#9E9D24,#827717",
    "JAVASCRIPT":"#FFFF00,#FFEA00,#FFD600",
    "DESARROLLO_WEB":"#69F0AE,#00E676,#00C853",
    "DESARROLLO_MOVIL":"#388E3C,#2E7D32,#1B5E20",
    "DESARROLLO_MULTIPLATAFORMA":"#303F9F,#283593,#1A237E",
    "BASES_DE_DATOS":"#0288D1,#0277BD,#01579B",
    "INTELIGENCIA_ARTIFICIAL":"#7B1FA2,#6A1B9A,#4A148C",
    "CLOUD_COMPUTING_SERVICES":"#455A64,#37474F,#263238",
    "Otros": "#212124,#3B3D62,#202135"
  }

  constructor() { }

  ngAfterViewInit() {
    let ul = document.getElementsByClassName('course-category');
    for(let i = 0; i < ul.length; i++) {
      let li = ul[i].getElementsByTagName('li');
      for(let j = 0; j < li.length; j++) {
        
        li[j].style.backgroundImage = `linear-gradient(
          90deg,
          ${this.colors[li[j].className.split('-')[li[j].className.split('-').length-1]].split(',')[0]} 11px,
          ${this.colors[li[j].className.split('-')[li[j].className.split('-').length-1]].split(',')[1]} 10px,
          ${this.colors[li[j].className.split('-')[li[j].className.split('-').length-1]].split(',')[2]} 10px,
          transparent 11px)`;
          //console.log(li[j].className);
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

    //console.log(this.coursesJ1);
    //console.log(this.coursesJ2);
    //console.log(this.coursesJ3);

  }

}
