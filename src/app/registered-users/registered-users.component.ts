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
  displayedColumns: string[] = ['name', 'email', 'idNo', 'createdAt'];
  dataSource = [
    {
      "carreer": "Bionica",
      "courses": [
        "Bases de Datos Relacionales",
        "Conceptos Generales de Bases de Datos",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Kotlin",
        "Angular",
        "Java Script",
        "Frontend",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Algoritmos y Estructuras de Datos",
        "Python",
        "C y C++"
      ],
      "createdAt": {
        "seconds": 1579409933,
        "nanoseconds": 350000000
      },
      "email": "angel.marcos@live.com.mx",
      "idNo": "2016090395",
      "name": "Marcos Montes Angel Mauricio",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "C y C++",
        "Introducción a la computación",
        "Terminal y Linea de Comandos",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Kotlin",
        "Angular",
        "Frontend",
        "Java Script",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Algoritmos y Estructuras de Datos",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579549525,
        "nanoseconds": 384000000
      },
      "email": "urielsimson@gmail.com",
      "idNo": "2019640402",
      "name": "Uriel Palomino ",
      "special": false
    },
    {
      "carreer": "HOPEFULLY BIONICA",
      "courses": [
        "De Cero a Objeto"
      ],
      "createdAt": {
        "seconds": 1579549560,
        "nanoseconds": 127000000
      },
      "email": "urielsimson@gmail.com",
      "idNo": "2019640402",
      "name": "Uriel Palomino",
      "special": true
    },
    {
      "carreer": "Bionica",
      "courses": [
        "C y C++",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Java Script",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579415665,
        "nanoseconds": 497000000
      },
      "email": "americabernal299@gmail.com",
      "idNo": "2019640394",
      "name": "Bernal America ",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "C y C++",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Kotlin",
        "Java Script",
        "Redes Neuronales",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Java",
        "Algoritmos y Estructuras de Datos",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579443230,
        "nanoseconds": 577000000
      },
      "email": "guzmansevilladiego@gmail.com ",
      "idNo": "2019640202",
      "name": "Guzmán Sevilla Diego ",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "Bases de Datos Relacionales",
        "C y C++",
        "Programación Básica",
        "ASP .NET ",
        "Kotlin",
        "Introducción al desarrollo en Android",
        "Java Script",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579731514,
        "nanoseconds": 511000000
      },
      "email": "angelna.rp@gmail.com",
      "idNo": "2019640540",
      "name": "Varela González Angel",
      "special": false
    },
    {
      "carreer": "Mecatronica",
      "courses": [
        "Java Script",
        "Java",
        "Algoritmos y Estructuras de Datos",
        "Python",
        "C y C++"
      ],
      "createdAt": {
        "seconds": 1579447136,
        "nanoseconds": 532000000
      },
      "email": "luisck_19@hotmail.com",
      "idNo": "2019640164",
      "name": "Ramirez  Miranda Luis Javier",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "C y C++",
        "Java Script",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Java",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579643467,
        "nanoseconds": 857000000
      },
      "email": "hdimasgal@gmail.com",
      "idNo": "2019640163",
      "name": "Hugo Dimas",
      "special": false
    },
    {
      "carreer": "HOPEFULLY BIONICA",
      "courses": [
        "De Cero a Objeto"
      ],
      "createdAt": {
        "seconds": 1579531780,
        "nanoseconds": 311000000
      },
      "email": "tsofia.vsanchez@gmail.com",
      "idNo": "2019360054",
      "name": "Vivero Sánchez Tania Sofía",
      "special": true
    },
    {
      "carreer": "Telematica",
      "courses": [
        "Git y Github",
        "Introducción al desarrollo en Android",
        "Kotlin",
        "Java Script",
        "Java"
      ],
      "createdAt": {
        "seconds": 1579474415,
        "nanoseconds": 348000000
      },
      "email": "Abrajamgaa16@gmail.com",
      "idNo": "2019640465",
      "name": "Garcia acosta abrahan",
      "special": false
    },
    {
      "carreer": "Mecatronica",
      "courses": [
        "C y C++",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Introducción al desarrollo en Android",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579434880,
        "nanoseconds": 780000000
      },
      "email": "Candidoipn@gmail.com",
      "idNo": "2019640088",
      "name": "Basilio Cruz Cándido",
      "special": false
    },
    {
      "carreer": "HOPEFULLY BIONICA",
      "courses": [
        "De Cero a Objeto"
      ],
      "createdAt": {
        "seconds": 1579474339,
        "nanoseconds": 936000000
      },
      "email": "Abrajamgaa16@gmail.com",
      "idNo": "2019640465",
      "name": "Garcia Acosta Abraham",
      "special": true
    },
    {
      "carreer": "Mecatronica",
      "courses": [
        "C y C++",
        "Programación Básica",
        "Git y Github",
        "Java Script",
        "Java",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579446851,
        "nanoseconds": 534000000
      },
      "email": "jobvazquez890@gmail.com",
      "idNo": "2019640560",
      "name": "Job Alejandro Vazquez Contreras",
      "special": false
    },
    {
      "carreer": "Mecatronica",
      "courses": [
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Introducción al desarrollo en Android"
      ],
      "createdAt": {
        "seconds": 1579414854,
        "nanoseconds": 635000000
      },
      "email": "diego.blake11@gmail.com",
      "idNo": "2019640240",
      "name": "Herrera Prado Diego",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "C y C++",
        "Java Script",
        "Angular",
        "Frontend",
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "Programación Básica",
        "Introducción a la computación",
        "Terminal y Linea de Comandos",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Kotlin",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Algoritmos y Estructuras de Datos"
      ],
      "createdAt": {
        "seconds": 1579534888,
        "nanoseconds": 975000000
      },
      "email": "gabriela.michelle.arreola@gmail.com",
      "idNo": "2019640461",
      "name": "Arreola del Razo, Gabriela Michelle ",
      "special": false
    },
    {
      "carreer": "Undefined",
      "courses": [
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Python",
        "C y C++",
        "Algoritmos y Estructuras de Datos",
        "Java",
        "Redes Neuronales",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Angular",
        "Java Script",
        "Frontend",
        "Kotlin",
        "Introducción al desarrollo en Android",
        "Git y Github",
        "ASP .NET ",
        "Bases de Datos Relacionales",
        "Conceptos Generales de Bases de Datos"
      ],
      "createdAt": {
        "seconds": 1579410088,
        "nanoseconds": 268000000
      },
      "email": "perc-0010@hotmail.com",
      "idNo": "2016090811",
      "name": "Ramón Cobos Pablo",
      "special": false
    },
    {
      "carreer": "HOPEFULLY BIONICA",
      "courses": [
        "De Cero a Objeto"
      ],
      "createdAt": {
        "seconds": 1579457326,
        "nanoseconds": 652000000
      },
      "email": "yin.chew.wah@gmail.com",
      "idNo": "2019640242",
      "name": "Yin WO",
      "special": true
    },
    {
      "carreer": "HOPEFULLY BIONICA",
      "courses": [
        "De Cero a Objeto"
      ],
      "createdAt": {
        "seconds": 1579434569,
        "nanoseconds": 845000000
      },
      "email": "Candidoipn@gmail.com",
      "idNo": "2019640088",
      "name": "Basilio Cruz Cándido ",
      "special": true
    },
    {
      "carreer": "Bionica",
      "courses": [
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "C y C++",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Kotlin",
        "Angular",
        "Frontend",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Algoritmos y Estructuras de Datos",
        "Java",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579414133,
        "nanoseconds": 912000000
      },
      "email": "zhavixp@gmail.com",
      "idNo": "2019640490",
      "name": "Javier Alberto Delgado Fragoso",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "Java Script",
        "Frontend",
        "Python",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Algoritmos y Estructuras de Datos",
        "C y C++"
      ],
      "createdAt": {
        "seconds": 1579457253,
        "nanoseconds": 901000000
      },
      "email": "dan_alcazar.espinosa@live.com",
      "idNo": "2019640127",
      "name": "Alcazar Espinosa Daniel ",
      "special": false
    },
    {
      "carreer": "Mecatronica",
      "courses": [
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Java Script",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Java",
        "Algoritmos y Estructuras de Datos",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579418047,
        "nanoseconds": 585000000
      },
      "email": "suiwahor@outlook.com",
      "idNo": "2018111772",
      "name": "Wah Ortiz Sui Som",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "C y C++",
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Kotlin",
        "Java Script",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Algoritmos y Estructuras de Datos",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579412725,
        "nanoseconds": 40000000
      },
      "email": "urielsaulms@yahoo.com.mx",
      "idNo": "2019640167",
      "name": "Maldonado Soriano Uriel",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "C y C++",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Programación Básica",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Kotlin",
        "Angular",
        "Java Script",
        "Frontend",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Algoritmos y Estructuras de Datos",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579823057,
        "nanoseconds": 666000000
      },
      "email": "Alanrodrigolopez1017@gmail.com",
      "idNo": "2019640063",
      "name": "Lopez Lopez Alan Rodrigo",
      "special": false
    },
    {
      "carreer": "Mecatronica",
      "courses": [
        "C y C++",
        "Introducción al desarrollo en Android",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Algoritmos y Estructuras de Datos",
        "Python"
      ],
      "createdAt": {
        "seconds": 1579414980,
        "nanoseconds": 276000000
      },
      "email": "vidals222@gmail.com",
      "idNo": "2019640500",
      "name": "Ángel vidals",
      "special": false
    },
    {
      "carreer": "HOPEFULLY BIONICA",
      "courses": [
        "De Cero a Objeto"
      ],
      "createdAt": {
        "seconds": 1579457122,
        "nanoseconds": 578000000
      },
      "email": "dan_alcazar.espinosa@live.com",
      "idNo": "2019640127",
      "name": "Alcazar Espinosa Daniel",
      "special": true
    },
    {
      "carreer": "HOPEFULLY BIONICA",
      "courses": [
        "De Cero a Objeto"
      ],
      "createdAt": {
        "seconds": 1579548886,
        "nanoseconds": 946000000
      },
      "email": "marco.hernandez.alanis@gmail.com",
      "idNo": "2015030552",
      "name": "Hernández Alanís Marco Antonio",
      "special": true
    },
    {
      "carreer": "Bionica",
      "courses": [
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Redes Neuronales",
        "Java",
        "Algoritmos y Estructuras de Datos",
        "Java Script",
        "Programación Básica",
        "C y C++",
        "Introducción a la computación"
      ],
      "createdAt": {
        "seconds": 1579413463,
        "nanoseconds": 441000000
      },
      "email": "tsofia.vsanchez@gmail.com",
      "idNo": "2019360054",
      "name": "Viveros Sánchez Tania Sofía",
      "special": false
    },
    {
      "carreer": "Bionica",
      "courses": [
        "Conceptos Generales de Bases de Datos",
        "Bases de Datos Relacionales",
        "C y C++",
        "Terminal y Linea de Comandos",
        "Introducción a la computación",
        "Fundamentos de Redes e Internet",
        "Git y Github",
        "ASP .NET ",
        "Introducción al desarrollo en Android",
        "Kotlin",
        "Angular",
        "Java Script",
        "Frontend",
        "Redes Neuronales",
        "Java",
        "Python",
        "Algoritmos y Estructuras de Datos",
        "Introducción a la Inteligencia artificial y Machine Learning",
        "Programación Básica"
      ],
      "createdAt": {
        "seconds": 1579806926,
        "nanoseconds": 190000000
      },
      "email": "saidcalixtro@gmail.com",
      "idNo": "2019640256",
      "name": "Said Calixtro",
      "special": false
    }
  ];
  tableDataSource;

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private afs: AngularFirestore) { 
    // this.itemsCollection = afs.collection<any>('users');
    // this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    
      this.tableDataSource= new MatTableDataSource(this.dataSource);
      this.tableDataSource.sort = this.sort;
    // this.items.subscribe(i => {
    //   console.log('iiiii', i);
      
    // })
  }

}
