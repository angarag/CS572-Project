import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff_component/staff.component';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';

import {StaffService} from './staff_service'
@NgModule({
  declarations: [StaffComponent,SearchPipe],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'students',component:StaffComponent}
      ])
  ],
  providers: [StaffService],
  bootstrap:[StaffComponent]
})
export class StaffModule { }
