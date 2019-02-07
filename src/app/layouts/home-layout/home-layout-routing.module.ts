import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'students' , component : StudentsComponent},
  {path : 'student/:id' , component : StudentComponent},
  {path : 'add-student' , component : AddStudentComponent},
  {path : 'edit-student/:id' , component : AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule { }
