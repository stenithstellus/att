import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Attendence, Employee } from 'src/app/Class/attendence';
import { AttendenceService } from 'src/app/Service/attendence.service';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-exittime',
  templateUrl: './exittime.component.html',
  styleUrls: ['./exittime.component.scss']
})
export class ExittimeComponent {

 

  attendanceId:any;

attends:Attendence=new Attendence();


  constructor(private attendService:AttendenceService,private route:Router,private activatedRoute: ActivatedRoute){
    // this.attendanceId = this.activatedRoute.snapshot.params['attendanceId']; 
  }
ngOnInit(){
  this.activatedRoute.paramMap.subscribe((params)=>{
    this.attendanceId =params.get("attendanceId");
  });
  console.log(this.attends);
  console.log(this.attendanceId);
  this.attendService.atgetbyid(this.attendanceId).subscribe(data=>{
    this.attends=data;
    console.log(this.attends);
  });
}

  onSubmit(){
    console.log(this.attends);
    this.attends.attendanceId=this.attends.attendanceId;
    this.attendService.attadd(this.attends).subscribe(data=>{
      this.route.navigate(['/employee']);
    });
  }

}
