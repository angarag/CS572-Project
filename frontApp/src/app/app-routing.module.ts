import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddStaffComponent } from './admin/add-staff/add-staff.component';
import { DisplayStaffComponent } from './admin/display-staff/display-staff.component';
import { HomeComponent } from './admin/home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AddQuestionComponent } from './question/add-question/add-question.component';
import { DisplayQuestionComponent } from './question/display-question/display-question.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addstaff', component: AddStaffComponent, canActivate: [AuthGuard] },
  { path: 'displaystaff', component: DisplayStaffComponent, canActivate: [AuthGuard] },
  { path: 'addquestion', component: AddQuestionComponent },
  { path: 'displayquestion', component: DisplayQuestionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
