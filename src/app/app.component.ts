import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Teacher from './teachers/teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

 
  footerText = 'יועד גדות 2021 כל הזכויות שמורות ©';

  constructor(public router: Router) {}
}
