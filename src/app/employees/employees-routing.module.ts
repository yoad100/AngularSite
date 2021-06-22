import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';



const routes: Routes = [{ path: 'employees', component: EmployeeslistComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
