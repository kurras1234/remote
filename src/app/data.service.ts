import { Injectable } from '@angular/core';
import { Employee, studentData } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studentsData:studentData[] = [  
    {  
       name:'arun',
       gender:'Male',
       physics:88,
       maths:87,
       english:78
    },
    {  
       name:'rajesh',
       gender:'Male',
       physics:96,
       maths:100,
       english:95
    },
    {  
       name:'moorthy',
       gender:'Male',
       physics:89,
       maths:90,
       english:70
    },
    {  
       name:'raja',
       gender:'Male',
       physics:30,
       maths:25,
       english:40
    },
    {  
       name:'usha',
       gender:'Female',
       physics:67,
       maths:45,
       english:78
    },
    {  
       name:'priya',
       gender:'Female',
       physics:56,
       maths:46,
       english:78
    },
    {  
       name:'Sundar',
       gender:'Male',
       physics:12,
       maths:67,
       english:67
    },
    {  
       name:'Kavitha',
       gender:'Female',
       physics:78,
       maths:71,
       english:67
    },
    {  
       name:'Dinesh',
       gender:'Male',
       physics:56,
       maths:45,
       english:67
    },
    {  
       name:'Hema',
       gender:'Female',
       physics:71,
       maths:90,
       english:23
    },
    {  
       name:'Gowri',
       gender:'Female',
       physics:100,
       maths:100,
       english:100
    },
    {  
       name:'Ram',
       gender:'Male',
       physics:78,
       maths:55,
       english:47
    },
    {  
       name:'Murugan',
       gender:'Male',
       physics:34,
       maths:89,
       english:78
    },
    {  
       name:'Jenifer',
       gender:'Female',
       physics:67,
       maths:88,
       english:90
    }
 ]
 
 employees: Employee[] = [{
   ID: 7,
   FirstName: 'Sandra',
   LastName: 'Johnson',
   Prefix: 'Mrs.',
   Position: 'Controller',
   Picture: 'images/employees/06.png',
   BirthDate: '1974/11/15',
   HireDate: '2005/05/11',
   Notes: "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
   Address: '4600 N Virginia Rd.',
 }, {
   ID: 10,
   FirstName: 'Kevin',
   LastName: 'Carter',
   Prefix: 'Mr.',
   Position: 'Shipping Manager',
   Picture: 'images/employees/07.png',
   BirthDate: '1978/01/09',
   HireDate: '2009/08/11',
   Notes: 'Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.',
   Address: '424 N Main St.',
 }, {
   ID: 11,
   FirstName: 'Cynthia',
   LastName: 'Stanwick',
   Prefix: 'Ms.',
   Position: 'HR Assistant',
   Picture: 'images/employees/08.png',
   BirthDate: '1985/06/05',
   HireDate: '2008/03/24',
   Notes: 'Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!',
   Address: '2211 Bonita Dr.',
 }, {
   ID: 30,
   FirstName: 'Kent',
   LastName: 'Samuelson',
   Prefix: 'Dr.',
   Position: 'Ombudsman',
   Picture: 'images/employees/02.png',
   BirthDate: '1972/09/11',
   HireDate: '2009/04/22',
   Notes: 'As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.',
   Address: '12100 Mora Dr',
 }];
 
  constructor() { }

  getEmployees(): Employee[] {
   return this.employees;
 }
}
