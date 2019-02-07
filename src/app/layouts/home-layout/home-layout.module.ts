import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { WINDOW_PROVIDERS } from '../../services/window-service';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { ApiService } from '../../services/api.service';
import { StudentComponent } from './components/student/student.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, StudentsComponent, StudentComponent, AddStudentComponent],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    RouterModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers : [WINDOW_PROVIDERS , ApiService]
})
export class HomeLayoutModule { }
