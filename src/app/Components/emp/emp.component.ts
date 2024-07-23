import { Component } from '@angular/core';
import { EmpService } from '../../Services/emp.service';
import { IEmployees } from '../../Models/iemployees';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.scss'
})
export class EmpComponent {

  empsList:IEmployees[] = [];
  errorMsg:any;

  constructor(private empService:EmpService) {
    empService.getAllEmps().subscribe(
      emps=> 
        {
          this.empsList = emps
        },
      error=>
        {
         this.errorMsg = error
        });
  }
}
