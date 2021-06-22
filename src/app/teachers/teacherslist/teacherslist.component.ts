import { TeacherService } from './../teacher.service';
import { Component, OnInit } from '@angular/core';
import Teacher from '../teacher';

@Component({
  selector: 'app-teacherslist',
  templateUrl: './teacherslist.component.html',
  styleUrls: ['./teacherslist.component.css']
})
export class TeacherslistComponent implements OnInit {

	teachers: Teacher[] = [];

	constructor(private service: TeacherService) {}
  
	ngOnInit(): void {
	  this.service
		.getTeachers()
		.subscribe((teachers) => (this.teachers = teachers));
	}
  


}
