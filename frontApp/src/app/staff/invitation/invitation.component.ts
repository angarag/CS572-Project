import { Component, OnInit } from '@angular/core';
import {StaffService} from './../staff_service'
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styles: []
})
export class InvitationComponent implements OnInit {
  email_responses=[];
  one_response;
  constructor(private staffService:StaffService) { }

  ngOnInit() {
  }
  sendInvitation(email){
    this.staffService.sendInvitation(email)
    .subscribe((res)=>{
      console.log('email result:',+res['data']);
      this.email_responses[email]=res['data'];
      this.one_response=res['data'];

    }
    );
  }
}
