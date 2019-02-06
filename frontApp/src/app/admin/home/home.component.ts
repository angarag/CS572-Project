import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstName;
  lastName;
  role;

  constructor() {
   
   }

  ngOnInit() {    
    this.firstName = localStorage.firstName;
    this.lastName = localStorage.lastName;
    this.role = localStorage.role;
  }

}
