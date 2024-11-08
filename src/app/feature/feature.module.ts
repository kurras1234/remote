import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsDataComponent } from './students-data/students-data.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DxButtonModule, DxPopupModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'studentDetail',
    component: StudentDetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'studentDetail',
    // canActivate: [AuthGuardService]
  }
]

@NgModule({
  declarations: [
    StudentsDataComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxTextBoxModule,
    DxPopupModule,
    DxTemplateModule,
    DxButtonModule
  ],
  exports: [
    StudentsDataComponent,
    StudentDetailsComponent
  ]
})
export class FeatureModule { }
