import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../Services/question.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

declare let swal: any;

@Component({
  selector: 'question',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionComponent implements OnInit {
  question_id: string;
  questionForm: FormGroup;
  control: any;
  private subscriber: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: QuestionService, private router: Router) {
      this.questionForm = fb.group({
          'category': ['', Validators.required],
          'question': ['', Validators.required],
          'active': ['', Validators.required]
      });
      this.control = this.questionForm.controls;
  }

  ngOnInit() {
    /*
    this.subscriber = this.route.params.subscribe(params => {
      this.question_id = params['id'];
    });
    if(this.question_id) {
      this.subscriber= this.service.getQuestion(this.question_id).
        subscribe( (response:any) => {
          if(response.status == 200) {
              response.data = response.data[0];
              this.questionForm.setValue({
                category: response.data.category,
                question: response.data.question,
                active: response.data.active
              });
          } else {
              console.log(response.message);
          }
        }, (error)=>{console.log(error)}, () => {});
    }
    */
  }

  onSubmit() {
    /*
    if(this.question_id) {
      this.subscriber = this.service.updateQuestion(this.question_id, JSON.stringify(this.questionForm.value))
      .subscribe((response: any) => {
          if(response.status == 200) {
            swal("Done!", "Question updated!", "success");
            this.router.navigate(['/admin/questions_list']);
          }else{
            swal("Sorry!", "An error occured", "error");
          }
        },
        (error) => { console.log(error), () => {}}
      );
    }else{
      this.subscriber = this.service.addQuestion(JSON.stringify(this.questionForm.value))
      .subscribe((response: any) => {
          if(response.status == 200) {
            swal("Done!", "The question has been added!", "success");
            this.router.navigate(['/admin/questions_list']);
          }else{
            swal("Sorry!", "An error occured", "error");
          }
        },
        (error) => { console.log(error), () => {}}
      );
    }
    */
  }

  ngOnDestroy() {
    if(this.subscriber) this.subscriber.unsubscribe();
    
  }
}
