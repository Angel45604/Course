import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import CoursesJson from '../../app/common/courses.json';
import { Course } from '../models/course.js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {

  categories:Object;
  mostrar = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  coursesJ: Array<Course> = [];
  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    //console.log(CoursesJson.courses);

    let count = 1;
    for(let i = 0; i< CoursesJson.courses.length; i++ ) {
      this.coursesJ.push(CoursesJson.courses[i]);

  }
  console.log(this.coursesJ);

  this.categories = this.coursesJ.reduce( (acc, obj) => {

    acc[obj.category] = acc[obj.category] || [];
    acc[obj.category].push(obj);
    return acc;
  }, {});

  console.log(this.categories);
}

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
          console.log(li[j].className);
      }
    }
  }


}
