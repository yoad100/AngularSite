import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeacherslistComponent } from './teacherslist/teacherslist.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';


@NgModule({
  declarations: [
    TeacherslistComponent,
    TeacherEditComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
	FormsModule
  ]
})
export class TeachersModule { }
