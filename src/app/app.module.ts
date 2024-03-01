import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { EmployeeaddComponent } from './Employee/employeeadd/employeeadd.component';
import { EmployeelistComponent } from './Employee/employeelist/employeelist.component';
import { EntrytimeComponent } from './Attendence/entrytime/entrytime.component';
import { ExittimeComponent } from './Attendence/exittime/exittime.component';
import { ViewComponent } from './Attendence/view/view.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeaddComponent,
    EmployeelistComponent,
    EntrytimeComponent,
    ExittimeComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }


