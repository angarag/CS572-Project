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

  id: number;
  result;

  constructor
  (private adminService: AdminService,
    private studentService: StudentService,
   private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.id = params['id'];
      this.studentService.getStudentsbyId(this.id)
      .subscribe(res => {
        this.result = res['data'];
      });

    });
  }

}
