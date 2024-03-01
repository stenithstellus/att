export class Attendence {
    map(arg0: (entry: any) => { emp_id: any; entry_time: any; date: Date; }): any {
      throw new Error('Method not implemented.');
    }
    attendanceId :number=0;
    entry_time:string="";
    exit_time:string="";
    late:number=0;
    leave_days:number=0;
    date:Date=new Date;
    employee:Employee=new Employee();
}
export class Employee {
    emp_id :number=0;
    doj?:Date;
    emp_name:string="";
}
