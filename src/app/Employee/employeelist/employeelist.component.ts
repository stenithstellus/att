import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendence, Employee } from 'src/app/Class/attendence';
import { AttendenceService } from 'src/app/Service/attendence.service';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent {

  employee: Employee = new Employee();
  employees: any;
  emp_id: number;
  attendanceId: number;
  attend: Attendence = new Attendence();
  attends:any;
  startDate :any;
  dates: any;

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  endDate :any;
  years: number[] = [];
  

  constructor(private emploeeservice: EmployeeService, private route: Router, private activatedRoute: ActivatedRoute, private attendenceService: AttendenceService,
    private datePipe: DatePipe) {
      

    this.emp_id = this.activatedRoute.snapshot.params['emp_id']; this.attendanceId = this.activatedRoute.snapshot.params['attendanceId']; this.generateDates();
    for (let i = 2024; i <= 2034; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {

    

    console.log(this.dates);
    this.generateDates();
    
   this.emploeeservice.findall().subscribe(data=>{
    this.employees=data;
    console.log(this.employees);
   });

    this.attendenceService.attall().subscribe(data => {
      this.attends = data.map(entry => ({
        emp_id: entry.employee.emp_id,
        entry_time: entry.entry_time,
        exit_time:entry.exit_time,
        date: entry.date 
    
      }));
      console.log(this.attends); 
    });
  
   
      
  }

 



  generateDates() {
    let currentDate = new Date(this.startDate);


    this.dates = [];

    while (currentDate <= this.endDate) {
      this.dates.push(this.datePipe.transform(currentDate,'yyyy-MM-dd'));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  formatDate(date: Date): string {
   
    return `${date.getDate()} ${this.getMonthName(date.getMonth())}`;

  }

  getMonthName(month: number): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
  }

  selectMonth(event: Event) {
    const target = event.target as HTMLSelectElement;
    const monthIndex = parseInt(target.value, 10); 
    const year = new Date().getFullYear();
    if (!isNaN(monthIndex)) {
      
      this.startDate = new Date(year, monthIndex, 1);
  
    
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  
      
      this.endDate = new Date(year, monthIndex, daysInMonth);
  
      
      this.generateDates();
    }
  }
  selectYear(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedYear = parseInt(target.value, 10); 
    const monthIndex = this.startDate.getMonth();
    if (!isNaN(selectedYear)) {
     
      this.startDate = new Date(selectedYear, monthIndex, 1);
  
     
      const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate();
  
     
      this.endDate = new Date(selectedYear, monthIndex, daysInMonth);
  
      this.generateDates();
    }
  }
  
}