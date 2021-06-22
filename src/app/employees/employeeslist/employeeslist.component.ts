import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import Employee from '../employee';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {

	employees: Employee[] = [];

	constructor(private service: EmployeeService) {}
  
	ngOnInit(): void {
	  this.service
		.getEmployees()
		.subscribe((employees) => (this.employees = employees));
	}
  

}
