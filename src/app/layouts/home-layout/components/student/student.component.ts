import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import {MatSnackBar} from '@angular/material';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  id : number
  student
  defaultImage = "../assets/images/200.png"
  constructor(public router : ActivatedRoute,public api : ApiService,
    private snackBar: MatSnackBar,public routering : Router,
    private toastr: ToastrService) {
    this.router.params.subscribe( params => {
      this.id = params["id"];
      this.getStudent(this.id);
      console.log(this.student);
    })
   }

  ngOnInit() {
  }

  getStudent(id : number){
    this.student = this.api.getItemById(this.id);

  }

    openSnackBar() {
      let snackBarRef = this.snackBar.open("Are you sure to delete "+ this.student.name , "Delete" ,{
        duration : 5000,
      })

      snackBarRef.afterDismissed().subscribe(_ => {
        
      })
      snackBarRef.onAction().subscribe(_ => {
        if(this.api.removeItemById(this.id)){
          console.log(0)
          this.toastr.success( this.student.name + " has been deleted")
          this.routering.navigate(['students'])
        }else{
          this.toastr.error( this.student.name + " couldn't be deleted")
        }
      })
    }
  
}
