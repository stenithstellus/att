import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendence, Employee } from 'src/app/Class/attendence';
import { AttendenceService } from 'src/app/Service/attendence.service';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  emp_id:number;
 attend:Attendence[]=[];
 attendanceId:any;
 
  constructor(private attendenceService:AttendenceService,private route:Router,private activatedRoute: ActivatedRoute,private employeeService:EmployeeService){
    this.emp_id = this.activatedRoute.snapshot.params['emp_id']; this.attendanceId = this.activatedRoute.snapshot.params['attendanceId'];
  }

  ngOnInit(){
    this.AttendEmp();
  }

 
  AttendEmp(){
    this.attendenceService.attemployee(this.emp_id).subscribe(data=>{
      this.attend=data;
    })
  }
  exit(attendanceId:number){
    console.log(attendanceId);
    
    this.route.navigate(['/exit',attendanceId]);
  }
}
