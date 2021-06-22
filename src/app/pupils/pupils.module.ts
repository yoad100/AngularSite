import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PupilsRoutingModule } from './pupils-routing.module';
import { PupilslistComponent } from './pupilslist/pupilslist.component';
import { PupilEditComponent } from './pupil-edit/pupil-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PupilslistComponent,
    PupilEditComponent
  ],
  imports: [
    CommonModule,
    PupilsRoutingModule,
	FormsModule
  ]
})
export class PupilsModule { }
