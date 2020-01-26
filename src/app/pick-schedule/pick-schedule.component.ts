import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import UsersJson from '../../app/common/users.json';
import { User } from '../models/user.js';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { OverviewDialogComponent } from '../overview-dialog/overview-dialog.component.js';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pick-schedule',
  templateUrl: './pick-schedule.component.html',
  styleUrls: ['./pick-schedule.component.css']
})
export class PickScheduleComponent implements OnInit {

  urli;
  userRef: AngularFirestoreCollection<any>;
  userDoc: AngularFirestoreDocument<any>;
  users = [];
  userParams;
  user;
  newUser;
  n;

  ELEMENT_DATA = [
    {monday: '8:30-10:00', tuesday: '', wednesday: '', thursday: '', friday: '8:30-10:00'},
    {monday: '10:00-11:30', tuesday: '', wednesday: '', thursday: '', friday: '10:00-11:30'},
    {monday: '', tuesday: '11:30-13:00', wednesday: '', thursday: '11:30-13:00', friday: ''},
    {monday: '13:00-14:30', tuesday: '', wednesday: '', thursday: '13:00-14:30', friday: ''},
    {monday: '', tuesday: '', wednesday: '14:30-16:00', thursday: '14:30-16:00', friday: '14:30-16:00'},
    {monday: '', tuesday: '', wednesday: '16:00-17:30', thursday: '', friday: ''},

  ];

  contactMethods = ['Correo', 'Otro'];
  contactMethod = 'Correo';
  newContactMethod = ''

  displayedColumns: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource = this.ELEMENT_DATA;

  constructor(public dialog: MatDialog, public _snackBar: MatSnackBar, private route: ActivatedRoute, private afs: AngularFirestore, public router: Router, private userService: UserService) { 
     this.route.queryParams.subscribe(params => {
       this.userParams =  JSON.parse(atob(decodeURIComponent(params['usr'])));
       console.log('aiaiaiaiai',this.userParams);
   });
  }

  hours = [];

  openDialog(wasFine): void {
    const dialogRef = this.dialog.open(OverviewDialogComponent, {
      width: '250px',
      data: {special: true, success: wasFine}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  clicked(hour, isChecked) {
    //console.log('course', this.user);
    if(isChecked) {
      this.hours.push(hour);
    } else {
      let index = this.hours.indexOf(hour);
      this.hours.splice(index,1);
    }
  }

  send() {
    console.log(this.hours);
    if(this.hours.length == 0) {
      alert('Selecciona tu horario');
    } else {
      if(this.contactMethod != 'Correo') {
        this.newUser.update({schedule: this.hours, contact: this.newContactMethod});
      } else {
        this.newUser.update({schedule: this.hours, contact: this.contactMethod});
      }
      this._snackBar.open('Horario Registrado, nos pondremos en contacto contigo. ¡Nos vemos el lunes!', 'x', {
        duration: 3500,
      }).afterDismissed().subscribe(() => {
        //console.log('The snack-bar was dismissed');
        this.router.navigate(['/'])
      });
    }
  }

  ngOnInit() {
    for(let user of UsersJson.users) {
      //console.log(user.name, btoa(JSON.stringify(user)));
    }
    //console.log('auauauauau' );
    //JSON.parse(atob('eyJlbWFpbCI6InVyaWVsc2ltc29uQGdtYWlsLmNvbSIsImlkTm8iOiIyMDE5NjQwNDAyIiwibmFtZSI6IlVyaWVsIFBhbG9taW5vIiwic3BlY2lhbCI6dHJ1ZX0='));
    if(!this.userParams) {
     this.router.navigate(['/'])
    }

    this.n = this.afs.collection('users', ref => {
      return ref.where('special', '==', true);
    });

    this.n.valueChanges().subscribe(u => {
      console.log(u)
      for(let i of u) {
        delete i['carreer'];
        delete i['courses'];
        delete i['createdAt'];
        console.log(i.email, 'https://cod-wa.web.app/pick-schedule?usr='+encodeURIComponent(btoa(JSON.stringify(i))));
      }
    })

    // this.user = this.userService.getUser(this.userParams.idNo, this.userParams.name).subscribe(u => {
    //   if(u.length > 0) {
    //     console.log('SI');
    //     console.log(u)
    //     this.newUser = this.afs.doc('users/' + u[0].payload.doc.id)
        
    //   }else {
    //     console.log('NO');
    //     this.router.navigate(['/'])
    //   }
    // })
    //btoa()
    //atob()
    
  }


}
