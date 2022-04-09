import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLayout } from './routes/home-page-layout.component';
import { ContinuityLayout } from './routes/continuity-layout.component';
import { OperationsLayout } from './routes/operations-layout.component';
import { PictureLayout } from './routes/picture-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageLayout
  },
  {
    path: 'OPS',
    component: OperationsLayout
  },
  {
    path: 'pictures',
    component: PictureLayout
  },
  {
    path: 'continuity',
    component: ContinuityLayout
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
