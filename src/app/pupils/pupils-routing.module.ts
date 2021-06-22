import { PupilEditComponent } from './pupil-edit/pupil-edit.component';
import { PupilslistComponent } from './pupilslist/pupilslist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'pupils', component: PupilslistComponent },
	{ path: 'pupils/:id', component: PupilEditComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PupilsRoutingModule { }
