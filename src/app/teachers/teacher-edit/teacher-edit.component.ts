import { TeacherService } from './../teacher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import Teacher from '../teacher';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
	id: string | null = null;
	Teacher: Observable<Teacher | null> = of(null);
  
	constructor(
	  private route: ActivatedRoute,
	  private service: TeacherService,
	) {}
  
	ngOnInit(): void {
	  this.Teacher = this.route.paramMap.pipe(
		switchMap((params: ParamMap) => this.service.getTeacher(params.get('id')))
	  );
	}
  
  
}
