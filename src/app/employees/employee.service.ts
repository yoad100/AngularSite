import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPLOYEES } from './dummy-data-emplyees';
import Employee from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	constructor() {}

	getEmployees(): Observable<Employee[]> {
	  return of(EMPLOYEES);
	}
  
  
}
