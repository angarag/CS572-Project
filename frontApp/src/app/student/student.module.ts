import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {StudentService} from './student_service';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [StudentComponent, SignupComponent],
  imports: [
    CommonModule,
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
