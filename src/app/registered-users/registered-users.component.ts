import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})

export class RegisteredUsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'idNo', 'createdAt', 'groups'];

  tableDataSource;
  checked = false;
  searchText = ''

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private afs: AngularFirestore) { 
    this.retrieveData();
  }

  retrieveData() {
    this.itemsCollection = this.afs.collection('users', ref => {
      return ref.where('special', '==', this.checked);
    });
    //this.itemsCollection = afs.collection('users', ref => ref.where('special', '==', true));
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(i => {
      this.tableDataSource= new MatTableDataSource(i);
      this.tableDataSource.sort = this.sort;
    })
  }

  changed() {
    this.retrieveData();
  }

  applyFilter(filterValue: string) {
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.retrieveData();
  }

}
