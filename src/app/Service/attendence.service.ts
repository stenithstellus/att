import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendence } from '../Class/attendence';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

   attUrl:string;
  constructor(private http:HttpClient) { 
    this.attUrl='http://localhost:8080/api';
  }

  public attall():Observable<Attendence>{
    return this.http.get<Attendence>(`${this.attUrl}/attendencelist`);
  }
  
  public attadd(att:Attendence):Observable<Object>{
    return this.http.post<Attendence>(`${this.attUrl}/attendenceadd`,att);
  }
  public attupdate(attendenceId:number,att:Attendence):Observable<Object>{
    return this.http.put<Attendence>(`${this.attUrl}/updateattend/${attendenceId}`,att);
  }
  public atgetbyid(attendenceId:number):Observable<Attendence>{
    return this.http.get<Attendence>(`${this.attUrl}/getattend/${attendenceId}`);   
  }
  public attemployee(emp_id:number):Observable<Attendence[]>{
    return this.http.get<Attendence[]>(`${this.attUrl}/empattend/${emp_id}`);
  }
}
