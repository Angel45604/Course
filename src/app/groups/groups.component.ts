import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  ELEMENT_DATA = [
    {hour: '8:30',monday: {course: 'javascript 1', location: 'Sala hub', value:'js1', selected: false, color: '#FFFF00', students:[]}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'javascript 1', location: 'Sala hub', value:'js1', selected: false, color: '#FFFF00', students:[]}},
    {hour: '10:00',monday: {course: 'programacion Basica 1', location: 'Sala hub', value:'pb1', selected: false, color: '#C2185B', students:[]}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'programacion Basica 1', location: 'Sala hub', value:'pb1', selected: false, color: '#C2185B', students:[]}},
    {hour: '11:30',monday: {course: 'python 1', value:'py1', selected: false, color: '#E64A19', students:[]}, tuesday: {course: 'javascript 3', location: 'Sala hub', value:'js3', selected: false, color: '#FFD600', students:[]}, wednesday: '', thursday: {course: 'javascript 3', location: 'Sala hub', value:'js3', selected: false, color: '#FFD600', students:[]}, friday: {course: 'python 1', value:'py1', selected: false, color: '#E64A19', students:[]}},
    {hour: '13:00',monday: {course: 'javascript 2', value:'js2', selected: false, color: '#FFEA00', students:[]}, tuesday: '', wednesday: {course: 'programacion Basica 2', value:'pb2', selected: false, color: '#C2185B', students:[]}, thursday: {course: 'programacion Basica 2', location: 'Sala hub', value:'pb2', selected: false, color: '#C2185B', students:[]}, friday: ''},
    {hour: '14:30',monday: '', tuesday: '', wednesday: {course: 'herramientas Computacionales', location: 'Sala hub', value:'hc1', selected: false, color: '#455A64', students:[]}, thursday: {course: 'javascript 2', value:'js2', selected: false, color: '#FFEA00', students:[]}, friday: {course: 'algoritmos 1', location: 'Sala hub', value:'al1', selected: false, color: '#B0BEC5', students:[]}},
    {hour: '16:00',monday: '', tuesday: '', wednesday: {course: 'algoritmos 1', value:'al1', selected: false, color: '#B0BEC5', students:[]}, thursday: '', friday: ''},

  ];

  contactMethods = ['Correo', 'Otro'];
  contactMethod = 'Correo';
  newContactMethod = ''

  userRef: AngularFirestoreCollection<any>;
  n;


  displayedColumns: string[] = ['hour', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource = this.ELEMENT_DATA;
  constructor(public dialog: MatDialog, private afs: AngularFirestore) { 

  }

  clicked(e, course, location, students) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '25vw',
      data: {name: e, course: course, location: location, students: students}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  groupUsers(user, course) {
    this.dataSource.map(element => {
        Object.keys(element).forEach(key => {
          if(element[key].course == course) {
            element[key].students.push(user)
          }
        })
    })
  }

  groupUsersByHour(user, day, hour) {
    this.dataSource.map(element => {
      //console.log(`LA HORA ES ${element['hour']} Y LA QUE MANDE ES ${hour}`)
      //console.log(`${element['hour']} == ${hour}`);
      if(element['hour'] == hour.trim()) {
        
        element[day].push(user.name);
      }
    });
    
  }

  retrieveData() {
    this.n = this.afs.collection('users', ref => {
      return ref.where('special', '==', false);
    });
    this.n.valueChanges().subscribe(u => {
      console.log(u);
      let a = [
        {hour: '8:30',monday: {course: 'javascript 1', location: 'Sala hub', value:'js1', selected: false, color: '#FFFF00', students:[]}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'javascript 1', location: 'Sala hub', value:'js1', selected: false, color: '#FFFF00', students:[]}},
        {hour: '10:00',monday: {course: 'programacion Basica 1', location: 'Sala hub', value:'pb1', selected: false, color: '#C2185B', students:[]}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'programacion Basica 1', location: 'Sala hub', value:'pb1', selected: false, color: '#C2185B', students:[]}},
        {hour: '11:30',monday: {course: 'python 1', value:'py1', selected: false, color: '#E64A19', students:[]}, tuesday: {course: 'javascript 3', location: 'Sala hub', value:'js3', selected: false, color: '#FFD600', students:[]}, wednesday: '', thursday: {course: 'javascript 3', location: 'Sala hub', value:'js3', selected: false, color: '#FFD600', students:[]}, friday: {course: 'python 1', value:'py1', selected: false, color: '#E64A19', students:[]}},
        {hour: '13:00',monday: {course: 'javascript 2', value:'js2', selected: false, color: '#FFEA00', students:[]}, tuesday: '', wednesday: {course: 'programacion Basica 2', value:'pb2', selected: false, color: '#C2185B', students:[]}, thursday: {course: 'programacion Basica 2', location: 'Sala hub', value:'pb2', selected: false, color: '#C2185B', students:[]}, friday: ''},
        {hour: '14:30',monday: '', tuesday: '', wednesday: {course: 'herramientas Computacionales', location: 'Sala hub', value:'hc1', selected: false, color: '#455A64', students:[]}, thursday: {course: 'javascript 2', value:'js2', selected: false, color: '#FFEA00', students:[]}, friday: {course: 'algoritmos 1', location: 'Sala hub', value:'al1', selected: false, color: '#B0BEC5', students:[]}},
        {hour: '16:00',monday: '', tuesday: '', wednesday: {course: 'algoritmos 1', value:'al1', selected: false, color: '#B0BEC5', students:[]}, thursday: '', friday: ''},
    
      ];
      this.dataSource = (a);
      for(let user of u) {
        if(user['groups']){
          console.log('USER', user['groups'])
           user['groups'].map(r => {
            if (r.includes('javascript 1'))
              this.groupUsers(user.name, 'javascript 1')
            if(r.includes('javascript 2'))
            this.groupUsers(user.name, 'javascript 2')
            if(r.includes('javascript 3'))
            this.groupUsers(user.name,'javascript 3')
            if(r.includes('python 1'))
            this.groupUsers(user.name, 'python 1')
            if(r.includes('herramientas Computacionales'))
            this.groupUsers(user.name, 'herramientas Computacionales')
            if(r.includes('algoritmos 1'))
            this.groupUsers(user.name, 'algoritmos 1')
            if(r.includes('programacion Basica 1'))
            this.groupUsers(user.name, 'programacion Basica 1')
            if(r.includes('programacion Basica 2'))
            this.groupUsers(user.name, 'programacion Basica 2')
          });
        }
        console.log(this.dataSource);
      }
    });
  }

  ngOnInit() {
    this.retrieveData();
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['dialog-overview-example-dialog.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

