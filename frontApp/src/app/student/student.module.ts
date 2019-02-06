import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {StudentService} from './student_service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [StudentComponent, SignupComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> 8534f922ca644c6cd00eece6f447ba1d53cb26a9
    AceEditorModule,
    RouterModule.forRoot([
      {path:'student/signup',component:SignupComponent},
      {path:'student/token',component:StudentComponent}
    ])

  ],
  providers:[StudentService],
  bootstrap:[StudentComponent]
})
export class StudentModule { }
