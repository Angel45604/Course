import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import CoursesJson from '../../app/common/courses.json';
import { Course } from '../models/course.js';
import { User } from '../models/user.js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {

  searchText;
  categories:Object;
  mostrar = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  coursesJ: Array<Course> = [];
  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

  user:User;

  constructor(private _formBuilder: FormBuilder) {
    this.user = new User();
  }

  clicked(course, isChecked) {
    if(isChecked) {
      this.user.courses.push(course.title);
    } else {
      let index = this.user.courses.indexOf(course.title);
      this.user.courses.splice(index,1);
    }
  }

  register() {
    console.log("User:", this.user);
  }

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

  }


}
