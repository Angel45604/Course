import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import CoursesJson from '../../app/common/courses.json';
import { Course } from '../models/course.js';
import { User } from '../models/user.js';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';

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
  categoryTitle = [];
  filteredOptions: Observable<string[]>;
  selectedOptions = [];
  myControl = new FormControl();

  user:User;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  

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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.categoryTitle.filter(option => option.toLowerCase().includes(filterValue));
  }

  selectCategory(value) {
    this.categoryTitle.splice(this.categoryTitle.indexOf(value), 1);
    this.selectedOptions.push(value);
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
    !this.categoryTitle.includes(obj.category) ? this.categoryTitle.push(obj.category) : {};
    acc[obj.category] = acc[obj.category] || [];
    acc[obj.category].push(obj);
    return acc;
  }, {});
  console.log("CAT", this.categoryTitle);
  console.log(this.categories);

  this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
}

reorder(arr) {
  let categories = {};
  for(let a of arr){
    if (categories[a.category] != null){
      categories[a.category].push(a)
    }else{
      categories[a.category] = [];
      categories[a.category].push(a)
    }
  }
  return categories;
}

  ngAfterViewInit() {
      //console.log("Perro", this.reorder(this.coursesJ));
  }


}
