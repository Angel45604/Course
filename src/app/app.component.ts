import { Component, OnInit } from '@angular/core';
import CoursesJson from '../app/common/courses.json';
import {Course} from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CourseWeb';
  panelOpenState = false;
  
  coursesJ: Array<Course> = [];
  course1: Course;


  reziseGridItem(item) {
    let grid = document.getElementsByClassName('courses')[0];
    let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    console.log('Row Gap', window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    console.log(parseInt(item.getBoundingClientRect().height) + rowGap);
    let rowSpan = Math.ceil((parseInt(item.querySelector('.content').getBoundingClientRect().height)+rowGap)/(rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
  }

  resizeAllGridItems() {
    let allItems = document.getElementsByClassName("card");
    for(let x=0; x<allItems.length; x++) {
       this.reziseGridItem(allItems[x]);
    }
 }

  ngOnInit() {
    //this.resizeAllGridItems();
    console.log(CoursesJson.courses);

    for(let i = 0; i< CoursesJson.courses.length; i++ ) {
      this.coursesJ.push(CoursesJson.courses[i]);
      
    }
    console.log(this.coursesJ);
  }

}
