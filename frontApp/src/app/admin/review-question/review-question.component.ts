import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { StudentService } from 'src/app/student/student_service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-review-question',
  templateUrl: './review-question.component.html',
  styleUrls: ['./review-question.component.css']
})
export class ReviewQuestionComponent implements OnInit {

  results;

  constructor
  (private adminService: AdminService,
    private studentService: StudentService,
   private route: ActivatedRoute ) { }

  ngOnInit() {
    this.studentService.getStudents()
    .subscribe(res => {
      this.results = res['data'];
    });
  }

}
