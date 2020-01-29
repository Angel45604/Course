import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Calendar } from '../models/calendar';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  ELEMENT_DATA = [
    {hour: '8:30-10:00', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
    {hour: '10:00-11:30', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
    {hour: '11:30-13:00', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
    {hour: '13:00-14:30', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
    {hour: '14:30-16:00', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
    {hour: '16:00-17:30', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []}

  ];

  dataSource: Calendar[] = this.ELEMENT_DATA;
  displayedColumns: string[] = ['hour', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  userRef: AngularFirestoreCollection<any>;
  n;

  checked = false;


  constructor(private afs: AngularFirestore) { }

  groupUsersByHour(user, day, hour) {
    this.dataSource.map(element => {
      //console.log(`LA HORA ES ${element['hour']} Y LA QUE MANDE ES ${hour}`)
      //console.log(`${element['hour']} == ${hour}`);
      if(element['hour'] == hour.trim()) {
        
        element[day].push(user.name);
      }
    });
  }

  changed() {
    this.retrieveData();
  }

  retrieveData() {
    this.n = this.afs.collection('users', ref => {
      return ref.where('special', '==', this.checked);
    });
    this.n.valueChanges().subscribe(u => {
      console.log(u);
      let a = [
        {hour: '8:30-10:00', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
        {hour: '10:00-11:30', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
        {hour: '11:30-13:00', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
        {hour: '13:00-14:30', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
        {hour: '14:30-16:00', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []},
        {hour: '16:00-17:30', monday: [], tuesday: [], wednesday: [], thursday: [], friday: []}
      ];
      this.dataSource = a;
      for(let user of u) {
        if(user['schedule']){
          console.log('USER', user['schedule'])
           user['schedule'].map(r => {
            if (r.includes('monday'))
              this.groupUsersByHour(user, 'monday', r.split(/:(.+)/)[1])
            if(r.includes('tuesday'))
            this.groupUsersByHour(user, 'tuesday', r.split(/:(.+)/)[1])
            if(r.includes('wednesday'))
            this.groupUsersByHour(user, 'wednesday', r.split(/:(.+)/)[1])
            if(r.includes('thursday'))
            this.groupUsersByHour(user, 'thursday', r.split(/:(.+)/)[1])
            if(r.includes('friday'))
            this.groupUsersByHour(user, 'friday', r.split(/:(.+)/)[1])
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