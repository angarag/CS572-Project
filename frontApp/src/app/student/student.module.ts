import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'student/signup',component:StudentComponent},
      {path:'student/token/:token',component:StudentComponent}
    ])

  ],
  bootstrap:[StudentComponent]
})
export class StudentModule { }
