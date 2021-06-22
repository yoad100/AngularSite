import { PupilService } from './../pupil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import Pupil from '../pupil';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pupil-edit',
  templateUrl: './pupil-edit.component.html',
  styleUrls: ['./pupil-edit.component.css']
})
export class PupilEditComponent implements OnInit {

	id: string | null = null;
	Pupil: Observable<Pupil | null> = of(null);
  
	constructor(
	  private route: ActivatedRoute,
	  private service: PupilService,
	) {}
  
	toNumber = (s: string): number => Number(s);
	ngOnInit(): void {
	  this.Pupil = this.route.paramMap.pipe(
		switchMap((params: ParamMap) => this.service.getPupil(params.get('id')))
	  );
	}
  
}
