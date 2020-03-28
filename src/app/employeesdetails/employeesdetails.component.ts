import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employeesdetails',
  templateUrl: './employeesdetails.component.html',
  styleUrls: ['./employeesdetails.component.css']
})
export class EmployeesdetailsComponent implements OnInit {

  public employees = [];

  // child to parent communication

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit(): void {
    // Event
    // fire() publish()
    //
    this._employeeService.getEmployees().subscribe(
      data => this.employees = data
    );
  }

}
