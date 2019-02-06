import { Component, OnInit } from '@angular/core';
import { StaffService } from './../staff_service'
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styles: []
})
export class InvitationComponent implements OnInit {
  email_responses = [];
  one_response;
  constructor(private staffService: StaffService) { }

  ngOnInit() {
  }
  sendInvitation(email) {
    this.one_response=null;
    this.staffService.getByEmail(email).subscribe(res => {
      if (res['error']) {
        this.staffService.sendInvitation(email).subscribe(res => {
          let response = res['data'];
          if (response.code === 11000)
            this.one_response = 'User already exists';
          else if (response._id)
            this.one_response = 'Invitation email sent & User created';
          console.log(response);
          this.email_responses[email] = response;
        }
        );
      }
      else {
        this.one_response = 'User already exists';

      }
    });
  }
}
