import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-group',
  templateUrl: './pick-group.component.html',
  styleUrls: ['./pick-group.component.css']
})
export class PickGroupComponent implements OnInit {

  ELEMENT_DATA = [
    {hour: '8:30',monday: {course: 'javascript 1', value:'js1', selected: false, color: '#FFFF00'}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'javascript 1', value:'js1', selected: false, color: '#FFFF00'}},
    {hour: '10:00',monday: {course: 'programacion Basica 1', value:'pb1', selected: false, color: '#C2185B'}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'programacion Basica 1', value:'pb1', selected: false, color: '#C2185B'}},
    {hour: '11:30',monday: {course: 'python 1', value:'py1', selected: false, color: '#E64A19'}, tuesday: {course: 'javascript 3', value:'js3', selected: false, color: '#FFD600'}, wednesday: '', thursday: {course: 'javascript 3', value:'js3', selected: false, color: '#FFD600'}, friday: {course: 'python 1', value:'py1', selected: false, color: '#E64A19'}},
    {hour: '13:00',monday: {course: 'javascript 2', value:'js2', selected: false, color: '#FFEA00'}, tuesday: '', wednesday: {course: 'programacion Basica 2', value:'pb2', selected: false, color: '#C2185B'}, thursday: {course: 'programacion Basica 2', value:'pb2', selected: false, color: '#C2185B'}, friday: ''},
    {hour: '14:30',monday: '', tuesday: '', wednesday: {course: 'herramientas Computacionales', value:'hc1', selected: false, color: '#455A64'}, thursday: {course: 'javascript 2', value:'js2', selected: false, color: '#FFEA00'}, friday: {course: 'algoritmos 1', value:'al1', selected: false, color: '#B0BEC5'}},
    {hour: '16:00',monday: '', tuesday: '', wednesday: {course: 'algoritmos 1', value:'al1', selected: false, color: '#B0BEC5'}, thursday: '', friday: ''},

  ];

  contactMethods = ['Correo', 'Otro'];
  contactMethod = 'Correo';
  newContactMethod = ''

  displayedColumns: string[] = ['hour', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource = this.ELEMENT_DATA;
  isLogged = false

  selectedCourses = []
  firstFormGroup: FormGroup;
  user;
  newUser;

  constructor( public router: Router, private _bottomSheet: MatBottomSheet, private _formBuilder: FormBuilder, private userService: UserService, private _snackBar: MatSnackBar, private afs: AngularFirestore) { 
    this.user = new User();
    this.user.groups = [];
  }

  

  clicked(e, value) {
    this.addCourse(e, value)
    //this.addCourse()
    for(let i = 0; i < this.ELEMENT_DATA.length; i++) {
      Object.keys(this.ELEMENT_DATA[i]).forEach(key => {
        if(this.ELEMENT_DATA[i][key].course == value) {
          this.ELEMENT_DATA[i][key].selected = !this.ELEMENT_DATA[i][key].selected
          console.log('ESTESI', this.ELEMENT_DATA[i][key])
        }
      })
    }
  }

  addCourse(e, value) {
    if(e) {
      if(!this.selectedCourses.includes(value)) {
        this.selectedCourses.push(value)
      }
      
    } else {
      let index = this.selectedCourses.indexOf(value);
      this.selectedCourses.splice(index,1);
      
    }
  }

  send() {
    console.log(this.user.email, this.user.idNo)

    this.user = this.userService.getUserByEmail(this.user.idNo, this.user.email).subscribe(u => {
      console.log(u)
      if(u.length > 0) {
        console.log('SI');
        console.log(u)
        this.isLogged = true;
        this.newUser = this.afs.doc('users/' + u[0].payload.doc.id)
        console.log(this.newUser);
      }else {
        console.log('NO');
        this._snackBar.open('Datos Invalidos', 'x', {
          duration: 2000,
        }).afterDismissed().subscribe(() => {
          //console.log('The snack-bar was dismissed');
        });
      }
    })
  }

  select() {
    //this.user.groups = this.selectedCourses;
    if(this.selectedCourses.length == 0) {
      alert('Selecciona un grupo');
    } else {
      this.newUser.update({groups: this.selectedCourses});
      this._bottomSheet.open(BottomSheetGroups).afterDismissed().subscribe(() => {
        this.router.navigate(['/'])
      });
    }
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `<h3>Horario registrado, nos vemos en clase!</h3>
              <a href="https://chat.whatsapp.com/LG9vZwC2b58ITdibFRexxm">Unete al grupo de Whatsapp</a>`,
  styleUrls: ['./bottom-sheet-overview-example-sheet.css']
})
export class BottomSheetGroups {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetGroups>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}