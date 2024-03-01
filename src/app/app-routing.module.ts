import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './Employee/employeelist/employeelist.component';
import { EmployeeaddComponent } from './Employee/employeeadd/employeeadd.component';
import { EntrytimeComponent } from './Attendence/entrytime/entrytime.component';
import { ExittimeComponent } from './Attendence/exittime/exittime.component';
import { ViewComponent } from './Attendence/view/view.component';

const routes: Routes = [
  {path:'employee',component:EmployeelistComponent},
  {path:'addemp',component:EmployeeaddComponent},
  {path:'entry',component:EntrytimeComponent},
  {path:'exit/:attendanceId',component:ExittimeComponent},
  {path:'view/:emp_id',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
