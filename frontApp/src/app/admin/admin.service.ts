import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../student/student_service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit{
  
  @Output() resultSelected = new EventEmitter();
  constructor(private studentService: StudentService) { }



  ngOnInit() {
  }
}
