import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff_component/staff.component';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';

import {StaffService} from './staff_service';
import { InvitationComponent } from './invitation/invitation.component'
import { StaffGuard } from './../auth/guards/staff.guard';

@NgModule({
  declarations: [StaffComponent,SearchPipe, InvitationComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'staff/students',component:StaffComponent,canActivate: [StaffGuard]},
      {path:'staff/inviteStudents',component:InvitationComponent,canActivate: [StaffGuard]}
    ])
  ],
  providers: [StaffService],
  bootstrap:[StaffComponent]
})
export class StaffModule { }
