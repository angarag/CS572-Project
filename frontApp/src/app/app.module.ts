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
import { QusetionsComponent } from './admin/qusetions/qusetions.component';
import { StaffModule } from './staff/staff.module';
import { StudentModule } from './student/student.module';
import { HomeComponent } from './admin/home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/auth_services/auth.service';
import { AuthInterceptor } from './interceptors/auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    LoaderComponent,
    AddStaffComponent,
    DisplayStaffComponent,
    QusetionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
