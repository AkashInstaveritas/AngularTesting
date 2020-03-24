import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { TemplatereferencevariablesComponent } from './templatereferencevariables/templatereferencevariables.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { EmployeesdetailsComponent } from './employeesdetails/employeesdetails.component';
import { EmployeesService } from './employees.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolateComponent,
    TemplatereferencevariablesComponent,
    TwowaybindingComponent,
    StructuraldirectivesComponent,
    ComponentinteractionComponent,
    PipesComponent,
    EmployeeslistComponent,
    EmployeesdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
