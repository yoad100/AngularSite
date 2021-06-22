import { PupilService } from './../pupil.service';
import { Component, OnInit } from '@angular/core';
import Pupil from '../pupil';

@Component({
  selector: 'app-pupilslist',
  templateUrl: './pupilslist.component.html',
  styleUrls: ['./pupilslist.component.css']
})
export class PupilslistComponent implements OnInit {

	pupils: Pupil[] = [];

	constructor(private service: PupilService) {}
  
	ngOnInit(): void {
	  this.service.getPupils().subscribe((pupils) => (this.pupils = pupils));
	}
  

}
