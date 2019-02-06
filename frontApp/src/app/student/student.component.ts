import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StudentService } from "./student_service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: []
})
export class StudentComponent implements OnInit {
  private subscription: Subscription;
  token;
  questions;
  private answerForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: StudentService
  ) {
    localStorage.removeItem("token");
    this.answerForm = this.formBuilder.group({
      answer1: ['', [Validators.required]],
      answer2: ['', [Validators.required]],
      answer3: ['', [Validators.required]]
    });
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.token = param['token'];
        this.service.validateToken(this.token)
          .subscribe((result) => {
            if (result['error'] || result['data'] == null)
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
    if(this.token!=null)
    this.service.updateToken(obj)
      .subscribe((result) => {
        console.log(result);
      })
  }


  onSubmit() {
    const formValues = this.answerForm.value;
    console.log('submit answers clicked')
    console.log(formValues)
  }
}
