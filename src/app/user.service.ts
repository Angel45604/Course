import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<any>;
  users: Observable<any[]>
  constructor(private afs: AngularFirestore) { 
  }

  public getUser(idNo, name) {
    this.usersCollection = this.afs.collection('users', ref => {
      return ref.where('idNo', '==', idNo).where('name', '==', name);
    })
    this.users = this.usersCollection.snapshotChanges();
    return this.users;
  }

  public getUserByEmail(idNo, email) {
    this.usersCollection = this.afs.collection('users', ref => {
      return ref.where('idNo', '==', idNo).where('email', '==', email).where('special', '==', false);
    })
    this.users = this.usersCollection.snapshotChanges();
    return this.users;
  }
}
