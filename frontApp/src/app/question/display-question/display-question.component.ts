import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {
  questions = [];
  constructor(private questionService: QuestionService) { 
    this.questionService.getQuestion()
    .subscribe(res => {
      this.questions = res['data'];
    })
  }

  onButtonClicked(question) {
    console.log(question.active);
    this.questionService.updateQuestionStatus(question)
    .subscribe(res => {
      console.log(res);
    })
    question.active=!question.active;
  }

  ngOnInit() {
  }

}
