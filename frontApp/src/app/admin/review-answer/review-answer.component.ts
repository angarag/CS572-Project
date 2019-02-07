import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentService } from 'src/app/student/student_service';

@Component({
  selector: 'app-review-answer',
  templateUrl: './review-answer.component.html',
  styleUrls: ['./review-answer.component.css']
})
export class ReviewAnswerComponent implements OnInit {
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
        console.log(this.result.questions[0][0].answer);
      });

    });
  }

}
