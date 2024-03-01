import { DatePipe, LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendence, Employee } from 'src/app/Class/attendence';
import { AttendenceService } from 'src/app/Service/attendence.service';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-entrytime',
  templateUrl: './entrytime.component.html',
  styleUrls: ['./entrytime.component.scss']
})
export class EntrytimeComponent {

  emp_id: number;
  employees: Employee = new Employee();
  employee: Employee[] = [];
  attends: any;
  attendanceId: number;
  myDate = new Date();
  attend: Attendence = new Attendence();
  values: any;
  off: any;
  currentdate: any;
  id: any;
  dat: any;
  newdate: any;
  offf: any;
  leaveType: any;
  leaveClicked: boolean = false;


  constructor(private attendService: AttendenceService, private route: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService
    , private datePipe: DatePipe) {
    this.emp_id = this.activatedRoute.snapshot.params['emp_id']; this.attendanceId = this.activatedRoute.snapshot.params['attendanceId'];

  }
  ngOnInit() {
    this.currentdate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    console.log(this.currentdate);
    console.log(this.attend);
    console.log(this.employees);

    this.employeeService.findall().subscribe(data => {
      this.employee = data;
    });

    this.attendService.attall().subscribe(data => {
      this.attends = data;

      this.values = this.attends.map((item: any) => {
        return {
          date: item.date,
          employeeid: item.employee.emp_id
        };
      });
      console.log(this.values);
      this.off = this.values.filter((of: any) => of.date === this.currentdate);
      console.log(this.off);
      console.log(this.attends);


    });

  }


  onSubmit() {
    this.attend.employee.emp_id = this.employees.emp_id;
    const existingAttendance = this.attends.find((item: any) => {
      return item.date === this.currentdate && item.employee.emp_id === this.attend.employee.emp_id;
    });

    if (existingAttendance) {

      existingAttendance.exit_time = this.attend.exit_time;
      this.attendService.attadd(existingAttendance).subscribe(data => {
        console.log('Exit time updated successfully.');
        this.route.navigate(['/employee']);
      });

    } 
    else {
      this.attendService.attadd(this.attend).subscribe(data => {
        console.log('Entry time added successfully.');
        this.route.navigate(['/employee']);
      });
    }
  }

  // onSubmit() {
  //   this.attend.employee.emp_id = this.employees.emp_id;

  //   const existingAttendance = this.attends.find((item: any) => {
  //     return item.date === this.currentdate && item.employee.emp_id === this.attend.employee.emp_id;
  //   });

  //   if (existingAttendance) {
  //     existingAttendance.exit_time = this.attend.exit_time;
  //     this.attendService.attadd(existingAttendance).subscribe(data => {
  //       console.log('Exit time updated successfully.');
  //       this.route.navigate(['/employee']);
  //     });


  //   }
  //   else if (existingAttendance.entry_time) {
  //     alert('Entry time Already Recorded So Please Add Exit Time');
  //   }
  
  //   else {

  //     this.attendService.attadd(this.attend).subscribe(data => {
  //       console.log('Entry time added successfully.');
  //       this.route.navigate(['/employee']);
  //     });
  //   }
  // }





  onLeaveClick() {
    this.leaveClicked = true;
    this.attend.entry_time = "0";
    this.attend.exit_time = "0";

  }
}