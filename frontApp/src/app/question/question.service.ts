import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor
  (private http: HttpClient,
   private router: Router
  ) {} 

  public addQuestion(question) {
    console.log('question service hit');
    return this.http.post("http://localhost:3600/api/questions/addquestion", question);
  }

  public getQuestion(){
    return this.http.get("http://localhost:3600/api/questions/displayquestion");
  }

  public updateQuestionStatus(question){
    console.log('updateid api called');
    return this.http.post("http://localhost:3600/api/questions/updatequestion", question);
  }

}
