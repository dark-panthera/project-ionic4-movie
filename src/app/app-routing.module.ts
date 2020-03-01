import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () => import('./movies/movie-detail/movie-detail.module').then( m => m.MovieDetailPageModule)
  },
  {
    path: 'movie-list',
    loadChildren: () => import('./movies/movie-list/movie-list.module').then( m => m.MovieListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
