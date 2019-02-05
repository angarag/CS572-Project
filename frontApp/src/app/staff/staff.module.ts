import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff_component/staff.component';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';

import {StaffService} from './staff_service';
import { InvitationComponent } from './invitation/invitation.component'
@NgModule({
  declarations: [StaffComponent,SearchPipe, InvitationComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'students',component:StaffComponent},
      {path:'inviteStudents',component:InvitationComponent}
    ])
  ],
  providers: [StaffService],
  bootstrap:[StaffComponent]
})
export class StaffModule { }
