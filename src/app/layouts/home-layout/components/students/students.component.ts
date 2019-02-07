import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Student } from '../../../../data/data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(public api : ApiService) { }

  defaultImage = "../assets/images/200.png"
  students : Student[]
  ngOnInit() {
    this.getAll()
    console.log(this.students)
  }

  getAll(){
    this.students = this.api.getAll()
  }

}
