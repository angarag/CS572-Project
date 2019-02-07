import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './static/nav/nav.component';
import { FooterComponent } from './static/footer/footer.component';
import { LoaderComponent } from './static/loader/loader.component';
import { AddStaffComponent } from './admin/add-staff/add-staff.component';
import { DisplayStaffComponent } from './admin/display-staff/display-staff.component';
import { StaffModule } from './staff/staff.module';
import { StudentModule } from './student/student.module';
import { HomeComponent } from './admin/home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/auth_services/auth.service';
import { AuthInterceptor } from './interceptors/auth';
import { AddQuestionComponent } from './question/add-question/add-question.component';
import { DisplayQuestionComponent } from './question/display-question/display-question.component';
import { DisplayResultComponent } from './admin/display-result/display-result.component';
import { ReviewAnswerComponent } from './admin/review-answer/review-answer.component';
import { GenerateResultComponent } from './admin/generate-result/generate-result.component';
import { StudentService } from './student/student_service';
import { ResultItemComponent } from './admin/result-item/result-item.component';
import { AdminService } from './admin/admin.service';
import { ResultStartComponent } from './admin/result-start/result-start.component';
import { ReviewQuestionComponent } from './admin/review-question/review-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    LoaderComponent,
    AddStaffComponent,
    DisplayStaffComponent,
    HomeComponent,
    AddQuestionComponent,
    DisplayQuestionComponent,
    DisplayResultComponent,
    ReviewAnswerComponent,
    GenerateResultComponent,
    ResultItemComponent,
    ResultStartComponent,
    ReviewQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StudentModule,
    StaffModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
             AuthService, AuthGuard, StudentService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
