import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [StudentComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'student/signup',component:SignupComponent},
      {path:'student/token/:token',component:StudentComponent}
    ])

  ],
  bootstrap:[StudentComponent]
})
export class StudentModule { }
