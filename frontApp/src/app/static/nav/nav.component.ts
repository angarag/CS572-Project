import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }
  logout() {
    this.authService.logout();
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isStudentPage() {
    if (this.authService.isStudent()) {
      return true;
    }
    return false;
  }

  isAdminPage() {
    if (this.authService.isAdmin()) {
      return true;
    }
    return false;
  }

  isStaffPage() {
    if (this.authService.isStaff()) {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
