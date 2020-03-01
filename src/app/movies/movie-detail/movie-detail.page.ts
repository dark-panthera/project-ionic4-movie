import { GetSelectedMovie } from './../../actions/movie.actions';
import { Movie } from 'src/app/movies/movie.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  protected movie$ = new Observable<Movie>();

  constructor(private activatedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetSelectedMovie(+this.activatedRoute.snapshot.paramMap.get('id')));

    this.movie$ = this.store.select(x => x.movies.selectedMovie);
  }
}
