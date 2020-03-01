import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieSearchPage } from './movie-search.page';

const routes: Routes = [
  {
    path: '',
    component: MovieSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieSearchPageRoutingModule {}
