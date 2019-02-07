import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StudentService } from "./student_service";
import { AuthService } from "./../auth/auth_services/auth.service";
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
  status:string="";
  private firstName: string;
  private lastName:string;
  max_timer: number = 3600*2;
  timeLeft: number = this.max_timer;
  interval;
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
    private service: StudentService,
    private authService: AuthService
  ) {
    this.authService.logoutHelper();
    
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
            this.status = result['data'].invitation.status;
            if(result['data'].invitation.expireDate!=null){
              let d = new Date(result['data'].invitation.expireDate);
              let s = d.getTime()/1000- Date.now()
              console.log(result['data'].invitation.expireDate,'seconds left:',s)  
            }
            if (this.status.includes('answered')){
              this.router.navigate(['/']);
            }
            if (!this.status.includes('started'))
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
      this.firstName="";
      this.lastName="";
  }
  ngOnDestroy() {
    this.pauseTimer();
    this.subscription.unsubscribe();
    if (!this.is_started) {
      const obj = {
        token: this.token,
        status: 'clicked',
        date: null
      }
      if (this.token != null && this.status==='sent')
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
    this.startTimer();
    this.is_started = true;
    const obj = {
      token: this.token,
      status: 'started',
      date: (new Date(+new Date() + this.max_timer))
    }
    if (this.token != null)
      this.service.updateToken(obj)
        .subscribe((result) => {
          console.log(result);
        })

  }

  onSubmit() {
    this.pauseTimer();
    console.log('submit answers clicked')
    console.log(this.answers)
    const obj = {
      token: this.token,
      q1a: this.answers[0],
      q2a: this.answers[1],
      q3a: this.answers[2],
      q1: this.questions[0].question,
      q2: this.questions[1].question,
      q3: this.questions[2].question,
      status: 'answered',
      firstName:this.firstName,
      lastName:this.lastName
    }
    this.service.saveAnswers(obj)
      .subscribe((result) => {
        alert('Test is submitted')
        this.router.navigate(['/']);
      })

  }



  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = this.max_timer;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
