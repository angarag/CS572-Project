import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class StaffService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    public getStudents() {
        return this.http.get('http://localhost:3600/api' + "/students/getAll");
    }

    public sendInvitation(email){
        return this.http.get('http://localhost:3600/api' + "/students/invite/"+email);
    }
}