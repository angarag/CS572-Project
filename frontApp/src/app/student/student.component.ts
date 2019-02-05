import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Subscription } from "rxjs";
import {StudentService} from "./student_service";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: []
})
export class StudentComponent implements OnInit {
  private subscription: Subscription;
  token;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private service:StudentService) {

      
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
      this.token = param['token']
        localStorage.setItem('token', this.token)

        this.service.validateToken(this.token)
        .subscribe((result)=>{
          console.log(result['data'].invitation.status)
          if(result['data'].invitation.status!=='sent')
          this.router.navigate(['/']);
        })
      })
  }

  ngOnInit() {
    const obj = {
      token:this.token,
      status: 'seen'
    }
    this.service.updateToken(obj)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
