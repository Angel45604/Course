import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-special',
  templateUrl: './sign-in-special.component.html',
  styleUrls: ['./sign-in-special.component.css']
})
export class SignInSpecialComponent implements OnInit {

  firstFormGroup: FormGroup;
  user:User;
  usersCollection: AngularFirestoreCollection<User>;
  constructor(private _formBuilder: FormBuilder, private AfDB: AngularFirestore, private _snackBar: MatSnackBar, public router: Router) {
    this.user = new User();
    this.usersCollection = this.AfDB.collection<User>('users');
   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      
      firstCtrl: ['', Validators.required]
    });
  }

  register() {
    //console.log(this.user);
    this.usersCollection.add({courses: ['De Cero a Objeto'], email: this.user.email, idNo: this.user.idNo, name: this.user.name, special: true, carreer: 'HOPEFULLY BIONICA'});
    this._snackBar.open('Registro Exitoso', 'x', {
      duration: 2000,
    }).afterDismissed().subscribe(() => {
      //console.log('The snack-bar was dismissed');
      this.router.navigate(['/'])
    });
  }

}
