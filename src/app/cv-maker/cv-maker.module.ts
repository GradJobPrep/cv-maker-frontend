import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvMakerComponent } from './components/cv-maker/cv-maker.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'cv-maker', component: CvMakerComponent },
];

@NgModule({
  declarations: [
    CvMakerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CvMakerModule { }
