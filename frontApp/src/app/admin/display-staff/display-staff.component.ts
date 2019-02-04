import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth_services/auth.service';

@Component({
  selector: 'app-display-staff',
  templateUrl: './display-staff.component.html',
  styleUrls: ['./display-staff.component.css']
})
export class DisplayStaffComponent implements OnInit {
  staffs = [];
  constructor(private authService: AuthService) {
    this.authService.getUser()
      .subscribe(res => {
        this.staffs = res['data'];
      })
   }

  ngOnInit() {
  }

}
