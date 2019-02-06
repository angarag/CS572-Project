import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  private questionForm: FormGroup;
  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
      this.questionForm = this.formBuilder.group({
        category: ['', [Validators.required]],
        question: ['', [Validators.required]],
      });
    }

    onSubmit() {
      console.log(this.questionForm);
      const formValues = this.questionForm.value;

      const question = {
        category: formValues.category,
        question: formValues.question,
      };

      this.questionService
        .addQuestion(question)
        .subscribe(res => {
          console.log(res);
        })
    }


  ngOnInit() {}
}

