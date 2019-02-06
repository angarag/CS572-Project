import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class StudentService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    public updateToken(obj) {
        return this.http.post('http://localhost:3600/api' + "/students/updateToken",obj);
    }
    public validateToken(token) {
        return this.http.get('http://localhost:3600/api' + "/students/validateToken?token="+token);
    }
    public sendInvitation(email){
        return this.http.get('http://localhost:3600/api' + "/students/invite/"+email);
    }
}