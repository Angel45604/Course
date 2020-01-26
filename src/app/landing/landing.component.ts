import { Component, OnInit, AfterViewInit } from '@angular/core';

import { preserveWhitespacesDefault } from '@angular/compiler';

import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit {

  title = 'CourseWeb';
  panelOpenState = false;
  width;
  height;
  innerwidth;
  innerheight;
  pixelRatio;
  resolution;
  
  
  helper = new JwtHelperService();
  

  setColor() {

  }



  ngOnChanges() {
    

  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    console.log(atob('eyJuYW1lIjogIkFZ2VsIiwgIkFnZSI6IDE5LCAiaXNSZWFkeSI6IHRydWV9'));


    this.width = screen.width;
    this.innerwidth = window.innerWidth;
    this.height = screen.height;
    this.innerheight = window.innerHeight;
    this.pixelRatio = window.devicePixelRatio;
    this.resolution = `${this.width * this.pixelRatio} x ${this.height * this.pixelRatio}`;
  }
}
