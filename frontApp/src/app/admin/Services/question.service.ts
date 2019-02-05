import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from "../../../common/services/host.service";



@Injectable()
export class QuestionsService {
    constructor(private config: ConfigService, private http: HttpClient){}
    getQuestions(){
        return this.http.get(this.config.BASE_API_URL+"questions");
    }
    getQuestion(id:string){
        return this.http.get(this.config.BASE_API_URL+"questions/"+id);
    }
    updateQuestion(id, body) {
        return this.http.patch(this.config.BASE_API_URL+"questions/"+id, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    addQuestion(body) {
        return this.http.post(this.config.BASE_API_URL+"questions", body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
}