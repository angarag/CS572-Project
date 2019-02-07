import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/student_service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-generate-result',
  templateUrl: './generate-result.component.html',
  styleUrls: ['./generate-result.component.css']
})
export class GenerateResultComponent implements OnInit {
  selectedResult;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.resultSelected
    .subscribe (
      (result) => {
        this.selectedResult = result;
      }
    );
  }
}
 




