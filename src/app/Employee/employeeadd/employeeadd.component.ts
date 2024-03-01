import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Class/attendence';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.scss']
})
export class EmployeeaddComponent {

  emp:Employee =new Employee();;

  constructor(private route:Router,private empService:EmployeeService){
   
  }

  onSubmit(){
    this.empService.add(this.emp).subscribe(result=>this.gotoEmpList());
  }

  gotoEmpList() {
    this.route.navigate(['/employee']);
  }
}
