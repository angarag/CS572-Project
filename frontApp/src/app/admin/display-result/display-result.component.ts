import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/student/student_service';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  results = [];
  constructor(private studentService: StudentService) {
    this.studentService.getStudents()
    .subscribe(res => {
      this.results = res['data'];
    })
   }

  ngOnInit() {
  }

}
