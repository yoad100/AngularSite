import { Injectable } from '@angular/core';
import Teacher from './teacher';
import { TEACHERS } from './dummy-data-teachers';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

	constructor() {}

	getTeachers(): Observable<Teacher[]> {
	  return of(TEACHERS);
	}
  
	getTeacher(id: string | null) {
	  return this.getTeachers().pipe(
		map((teachers: Teacher[]) => teachers.find((t) => t.id === id)!)
	  );
	}
  
}
