import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddStaffComponent } from './admin/add-staff/add-staff.component';
import { DisplayStaffComponent } from './admin/display-staff/display-staff.component';
import { HomeComponent } from './admin/home/home.component';
import { QuestionComponent } from './admin/questions/questions.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path: 'addstaff', component: AddStaffComponent},
  { path: 'displaystaff', component: DisplayStaffComponent},
  { path: 'addsQuestion', component: QuestionComponent},
  { path: 'displaystaff', component: DisplayStaffComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
