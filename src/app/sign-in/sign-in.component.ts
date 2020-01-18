import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import CoursesJson from '../../app/common/courses.json';
import { Course } from '../models/course.js';
import { User } from '../models/user.js';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipEvent } from '@angular/material/chips';

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
  selectedOptions = "";
  selectedCategories:Object;
  myControl = new FormControl();

  user:User;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = [];

  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  

  constructor(private _formBuilder: FormBuilder) {
    this.user = new User();
    this.user.courses = [];
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.selectedOptions = this.selectedOptions.replace( `|${fruit}|`, "");
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.value);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    console.log(this.fruits);
    this.selectedOptions += `|${event.option.value}|`

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  clicked(course, isChecked) {
    console.log('course', this.user);
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

  selectCategory(value) {
    this.categoryTitle.splice(this.categoryTitle.indexOf(value), 1);
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
    !this.allFruits.includes(obj.category) ? this.allFruits.push(obj.category) : {};
    acc[obj.category] = acc[obj.category] || [];
    acc[obj.category].push(obj);
    return acc;
  }, {});
  console.log("CAT", this.allFruits);
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
