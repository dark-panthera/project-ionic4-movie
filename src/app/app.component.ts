import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GenreType } from './movies/genre.model';
import { Component, OnInit } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngxs/store';
import { GetGenres, GetMovies, FilterByGenre } from './actions/movie.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  // Varaible to specify the selected item
  public selectedMovie = 0;
  public selectedGenre = 0;
 
  // Observable of type GenreType
  public genres$ = new Observable<GenreType[]>();
  public error$ = new Observable<any>();

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store,
    private router: Router,
    private toastController: ToastController
  ) {
    this.initializeApp();

    // Dispatch Get Movies Action
    this.store.dispatch(new GetMovies());

    // Dispatch Get Genres Action
    this.store.dispatch(new GetGenres());

    // Listen to select movies.genres
    this.genres$ = this.store.select(x => x.movies.genres);
    this.store.select(x => x.movies.error).pipe(take(1)).subscribe(result => {
      this.toastController.create({
        header: 'Error',
        message: result,
      });
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }

  // On Filter By Genre Redirect the user to movie search page
  onFilter(genre) {

    this.selectedGenre = genre.id;

    this.store.dispatch(new FilterByGenre(genre.genreType));

    this.router.navigate(['/', 'movies', 'movie-search']);
  }
}
