import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherslistComponent } from './teacherslist/teacherslist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'teachers', component: TeacherslistComponent },
	{ path: 'teachers/:id', component: TeacherEditComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
