import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { faculties, Student } from '../../../../data/data';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../../../services/window-service';
import * as FileSaver from 'file-saver';


import * as $ from 'jquery';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  studentForm : FormGroup
  student : Student
  faculties : any[]
  addPage : boolean = true;
  image
  id
  constructor(private router : ActivatedRoute,private api : ApiService,
  private routing : Router , private _location : Location,
  @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window) { 
    this.faculties = faculties
    this.studentForm = new FormGroup({
      name : new FormControl('' , [Validators.required , Validators.maxLength(50)]),
      phone : new FormControl('' , [Validators.required, Validators.pattern("^(010|011|012)[0-9]{8}$")]),
      faculty : new FormControl('' , Validators.required),
      dob : new FormControl(new Date() , Validators.required),
      address : new FormControl(''),
      image : new FormControl(''),
      id : new FormControl('')
    })
    this.router.params.subscribe( _ => {
      if(_["id"]){
        this.addPage = false
        this.id = _["id"]
        this.getStudent()
        this.studentForm.controls.id.setValue(this.id)
        this.studentForm.controls.name.setValue(this.student.name)
        this.studentForm.controls.phone.setValue(this.student.phone)
        this.studentForm.controls.faculty.setValue(this.faculties.find(_ => _.name == this.student.faculty).id)
        this.studentForm.controls.dob.setValue(new Date(this.student.dob).toISOString().substring(0,10))
        this.studentForm.controls.address.setValue(this.student.address)
        this.studentForm.controls.image.setValue(this.student.image)
      }
      console.log(this.studentForm.value)
    })

  }

  ngOnInit() {
  }
  
  getStudent(){
    this.student = this.api.getItemById(this.id)
  }
  addStudent(){
    this.api.addItem(this.studentForm.value)
    this.routing.navigate(['students'])
  }

  editStudent(){
    console.log(this.student)
    this.student.image = this.image
    this.api.editItem(this.studentForm.value)
    this.routing.navigate(['student',this.student.id])
  }
  goBack(){
    this._location.back();
  }
  getFileName(x : HTMLInputElement){
    if(x.files[0]){
      this.image  = x.files[0].name
      this.studentForm.controls.image.setValue(null)
    }
  }
}
