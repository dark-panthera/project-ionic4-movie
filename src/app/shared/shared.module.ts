import { NgModule } from '@angular/core';
import { MovieCardComponent } from '../movies/movie-card/movie-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Contains the Common Shared Module
// It requires to have Common Module, Forms Module, Ionic Module, Router Module imported
// Pages that require Toolbar and Movie Card Component will have the following Module
@NgModule({
  declarations: [ToolbarComponent, MovieCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    MovieCardComponent,
    ToolbarComponent,
    RouterModule
  ]
})
export class SharedModule { }
