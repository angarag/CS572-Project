import { Component, OnInit } from '@angular/core';
import {StaffService} from './../staff_service'
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styles: []
})
export class StaffComponent implements OnInit {
  students;
  constructor(private staffService:StaffService) {
    this.staffService.getStudents()
      .subscribe(res => {
        this.students = res['data'];
      })
   }

  ngOnInit() {
  }

}
