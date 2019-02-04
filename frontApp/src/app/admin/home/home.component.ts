import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [];
  user;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser()
    .subscribe(res => {
        this.users = res['data'];
    });
  this.user = 'Assad Saad';
    
  
  }

}
