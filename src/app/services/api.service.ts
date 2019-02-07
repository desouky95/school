import { Injectable } from '@angular/core';
import { students, Student} from '../data/data';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  students : any[]
  constructor() {
    this.students = students;
   }

   getAll() : Student[]{
     return this.students
   }

   getItemById( id : number){
     return this.students.find(_ => _.id == id);
   }

   removeItemById( id : number) : boolean {
     let index = this.students.findIndex(_ => _.id == id);
     if(index != null){
       this.students.splice(index,1);
       return true;
     }
     else{
       return false;
     }
   }

   addItem( student : Student){
     let temp = this.students.pop();
     let newId = temp.id++;
     this.students.push(temp);
     student.id = newId
     this.students.push(student);
   }

   editItem( student : Student){
    let index = this.students.findIndex(_ => _.id == student["id"]);
    this.students.splice(index,1);
    this.students.push(student);

   }
}
