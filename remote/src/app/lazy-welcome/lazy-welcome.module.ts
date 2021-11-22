import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LazyWelcomeComponent } from './lazy-welcome.component';

export const WELCOME_ROUTES: Routes = [
  {
    path: 'hi',
    component: LazyWelcomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule.forChild(WELCOME_ROUTES)
  ],
  declarations: [LazyWelcomeComponent]
})
export class LazyWelcomeModule { }
