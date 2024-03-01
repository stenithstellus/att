import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Class/attendence';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empUrl:string;
  constructor(private http:HttpClient) {
 this.empUrl='http://localhost:8080/api';
  } 

  public findall():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.empUrl}/list`);
  }
  public add(emp:Employee):Observable<Object>{
    return this.http.post<Employee>(`${this.empUrl}/add`,emp);
  }
  public Getbyid(emp_id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.empUrl}/get/${emp_id}`);
  }
  public update(emp_id:number,emp:Employee):Observable<Object>{
    return this.http.put<Employee>(`${this.empUrl}/update/${emp_id}`,emp);
  }
}
