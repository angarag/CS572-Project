import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StudentService } from "./student_service";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: []
})
export class StudentComponent implements OnInit {
  private subscription: Subscription;
  token;
  questions;
  text:string = "";
    options:any = {maxLines: 1000, printMargin: false};
    
    onChange(code) {
        console.log("new code", code);
    }
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: StudentService) {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.token=param['token'];
        this.service.validateToken(this.token)
          .subscribe((result) => {
            if(result['error'] || result['data']==null)
            this.router.navigate(['/']);
            console.log('invitation token status below')
            console.log(result['data'].invitation.status)
            if (result['data'].invitation.status !== 'sent')
              this.router.navigate(['/']);
          })
      })
  }

  ngOnInit() {
    this.service.getRandomQuestions()
    .subscribe(res => {
      this.questions = res['data'];
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    const obj = {
      token: this.token,
      status: 'seen'
    }
    this.service.updateToken(obj)
    .subscribe((result)=>{
      console.log(result);
    })
  }
}
