import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
        this.http.get('http://localhost:3600/api'+'/students/getByEmail/'+email)
        .subscribe((result)=>{
            console.log('see below')
            console.log(result)
            if(result['error']){
                return this.http.get('http://localhost:3600/api' + "/students/invite/"+email);
            }
            else{
                return new Observable((observer) => {
                    // observable execution
                    observer.next({
                        data:{
                            code:11000
                        }
                    })
//                    observer.complete()
                })
                } 
        })

    }
}