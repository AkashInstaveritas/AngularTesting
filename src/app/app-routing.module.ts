import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesdetailsComponent } from './employeesdetails/employeesdetails.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TemplatereferencevariablesComponent } from './templatereferencevariables/templatereferencevariables.component';


const routes: Routes = [
  {path: '', redirectTo:'/departments', pathMatch:'full'},
  {path: 'departments', component: DepartmentListComponent},
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children:[
      {path:'overview', component: DepartmentOverviewComponent},
      {path:'contact', component: DepartmentContactComponent}
    ]
  },
  {path: 'employees', component: EmployeeslistComponent},
  {path: 'employees/:id', component: EmployeesdetailsComponent},
  {path: 'interpolate', component: InterpolateComponent},
  {path: 'structural-directives', component: StructuraldirectivesComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'twoWay-binding', component:TwowaybindingComponent},
  {path: 'template-reference', component:TemplatereferencevariablesComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentListComponent,
                                  DepartmentDetailComponent,
                                  EmployeeslistComponent,
                                  EmployeesdetailsComponent,
                                  InterpolateComponent,
                                  StructuraldirectivesComponent,
                                  PageNotFoundComponent,
                                  PipesComponent,
                                  TwowaybindingComponent,
                                  TemplatereferencevariablesComponent];
