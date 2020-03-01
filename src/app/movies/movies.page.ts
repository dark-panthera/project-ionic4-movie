import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { MovieState } from '../state/movie.state';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  protected movieList$: Observable<Movie[]>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.movieList$ = this.store.select(MovieState.getHighestRatedMovies);
  }

}
