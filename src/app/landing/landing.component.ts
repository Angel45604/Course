import { Component, OnInit, AfterViewInit } from '@angular/core';

import { preserveWhitespacesDefault } from '@angular/compiler';

import { JwtHelperService } from "@auth0/angular-jwt";
import { MatSnackBar } from '@angular/material/snack-bar';

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
  
  constructor(private _snackBar: MatSnackBar) {

  }

  setColor() {

  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this._snackBar.open('Copiado al Portapapeles', 'x', {
      duration: 2000,
    }).afterDismissed().subscribe(() => {
      //console.log('The snack-bar was dismissed');
    });
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
