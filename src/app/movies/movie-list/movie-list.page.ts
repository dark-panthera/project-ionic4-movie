import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  protected movieList$: Observable<Movie[]>;

   constructor(private activatedRoute: ActivatedRoute, private store: Store) { }
 
   ngOnInit() {
     this.movieList$ = this.store.select(x => x.movies.movies);
   }
}
