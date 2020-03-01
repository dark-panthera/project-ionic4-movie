import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.page.html',
  styleUrls: ['./movie-search.page.scss'],
})
export class MovieSearchPage implements OnInit {
  protected movieList$: Observable<Movie[]>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.movieList$ = this.store.select(x => x.movies.filterMovie);
  }
}
