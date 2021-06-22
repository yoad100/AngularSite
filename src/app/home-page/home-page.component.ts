import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  title = 'ברוכים הבאים לבית ה ספר';
  city = 'ראשון לציון';
  numberOfStudents = 220;
  Vision = ` אנחנו בית ספר שמאמין ביחס האישי שמוענק לכל תלמיד"`;
  schoolImgUrl='https://www.bonei.co.il/images/upload/files/73451482041457.jpg'
}
