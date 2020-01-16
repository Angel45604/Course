import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit() {
    
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
