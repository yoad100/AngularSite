import { PUPILS } from './dummy-data-pupils';
import Pupil from './pupil';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PupilService {

	constructor() {}
	
	  getPupils(): Observable<Pupil[]> {
		return of(PUPILS);
	  }
	
	  getPupil(id: string | null): Observable<Pupil> {
		return this.getPupils().pipe(
		  map((pupils: Pupil[]) => pupils.find((p) => p.id === id)!)
		);
	  }
	
}
