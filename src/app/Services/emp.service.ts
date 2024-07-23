import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployees } from '../Models/iemployees';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private apiUrl:string="/assets/Data/emps.json";

  constructor(private httpClient:HttpClient)
  { }

  getAllEmps() : Observable<IEmployees[]>
  {
    return this.httpClient.get<IEmployees[]>(this.apiUrl);
  }

}
