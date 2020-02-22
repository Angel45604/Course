import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.css']
})
export class UserLinksComponent implements OnInit {
  displayedColumns: string[] = ['email', 'link'];

  tableDataSource;
  checked = false;
  searchText = ''

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private afs: AngularFirestore, private _snackBar: MatSnackBar) { 
    this.retrieveData();
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

  retrieveData() {
    this.itemsCollection = this.afs.collection('users', ref => {
      return ref.where('special', '==', this.checked);
    });
    //this.itemsCollection = afs.collection('users', ref => ref.where('special', '==', true));
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(u => {
      for(let i of u) {
        delete i['carreer'];
        delete i['courses'];
        delete i['createdAt'];
        console.log(i.email, 'https://cod-wa.web.app/pick-schedule?usr='+encodeURIComponent(btoa(JSON.stringify(i))));
        i['link'] = 'https://cod-wa.web.app/pick-schedule?usr='+encodeURIComponent(btoa(JSON.stringify(i)))
      }
      this.tableDataSource= new MatTableDataSource(u);
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
