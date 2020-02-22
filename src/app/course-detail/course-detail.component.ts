import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, AfterViewInit{

  message: string;
  disabled = true;

  expirationDate = new Date('2019-01-16T22:00')
  actualDate = new Date();
  courseDate: Date;

  constructor() {
    this.courseDate = new Date("2020-01-19T23:48")
   }

  ngOnInit() {
    console.log(this.actualDate.getHours());
    console.log(this.expirationDate.getHours());
    console.log (Math.floor((this.expirationDate.getHours() - this.actualDate.getHours())));
    this.message = (22 - this.actualDate.getHours()).toString();
    }


  ngAfterViewInit() {
    let post = document.getElementsByClassName('post-module')

    // let description = document.getElementsByClassName('description')
    // post[0].addEventListener('mouseenter', (e) => {
    //   description[0].style.display = 'block';
    //   description[0].animate([
    //     {
    //       display: 'none'
    //     },
    //     {
    //       display: 'block'
    //     }
    //   ], 
    //   {
    //     duration: 1000,
    //     fill: 'forwards'
    //   })
    // })

    // post[0].addEventListener('mouseleave', (e) => {
    //   post[0].classList.toggle('hover');
    //   description[0].style.display = 'none';
    //   console.log('nohover');
    // })

    

    
  }

}
