import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuestionService {
    constructor(private http: HttpClient){}
  
   
    addQuestion(body) {
        return this.http.post('http://localhost:3600/api/'+"questions", body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    updateQuestion(id, body) {
        return this.http.patch('http://localhost:3600/api/'+"questions/"+id, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    getQuestions(){
        return this.http.get('http://localhost:3600/api/'+"questions");
    }
    getQuestion(id:string){
        return this.http.get('http://localhost:3600/api/'+"questions/"+id);
    }
}