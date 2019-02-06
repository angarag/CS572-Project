import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StudentService } from "./student_service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { debounce } from "debounce";

@Component({

  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: []
})
export class StudentComponent implements OnInit {
  private subscription: Subscription;
  token: string;
  questions;
  text: string = "";
  is_started: Boolean = false;
  options: any = { maxLines: 1000, printMargin: false };
  private answers = {
    0: [],
    1: [],
    2: []
  }
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
            let status = result['data'].invitation.status;
            console.log(status)
            if (status.includes('answered'))
              this.router.navigate(['/']);
            if (!status.includes('started'))
              this.is_started = false;
            else this.is_started = true;
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
    if (!this.is_started) {
      const obj = {
        token: this.token,
        status: 'clicked',
        date:null
      }
      if (this.token != null)
        this.service.updateToken(obj)
          .subscribe((result) => {
            console.log(result);
          })
    }
  }
  onChange(code, id) {
    this.answers[id].push(code);
    console.log(id, "new snapshot:", code);
  }

  onStart() {
    this.is_started = true;
    const obj = {
      token: this.token,
      status: 'started',
      date:(new Date(+new Date() + 2*60*60*1000))
    }
    if (this.token != null)
      this.service.updateToken(obj)
        .subscribe((result) => {
          console.log(result);
        })

  }

  onSubmit() {
    console.log('submit answers clicked')
    console.log(this.answers)
  }
}
