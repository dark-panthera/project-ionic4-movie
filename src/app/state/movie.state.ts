import { GetGenres, FilterByGenre } from './../actions/movie.actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import * as MovieActions from '../actions/movie.actions';
import { map, tap, take } from 'rxjs/operators';
import { Movie } from '../movies/movie.model';
import { MovieService } from '../movies/movie.service';
import { GenreType } from '../movies/genre.model';

export class MovieStateModel {
    movies: Movie[];
    genres: GenreType[];
    selectedMovie: Movie;
    filterMovie: Movie[];
    error: any;
}

@State<MovieStateModel>({
    name: 'movies',
    defaults: {
        movies: [],
        genres: [],
        selectedMovie: undefined,
        filterMovie: [],
        error: undefined
    }
})
export class MovieState {

    constructor(private movieService: MovieService) {

    }

    @Selector()
    static getMovies(state: MovieStateModel) {
        return state.movies;
    }

    @Selector()
    static getGenres(state: MovieStateModel) {
        return state.genres;
    }

    @Selector()
    static getHighestRatedMovies(state: MovieStateModel) {
        return state.movies.filter((i, index) => (index < 5));
    }

    @Action(MovieActions.FilterMovie)
    searchMovie(
        { getState, patchState }: StateContext<MovieStateModel>,
        { payload }: MovieActions.FilterMovie
    ) {
        const state = getState();

        const result = state.movies.filter(x => x.name.toLowerCase().indexOf(payload.toLowerCase()) !== -1);

        patchState({
            filterMovie: [...result]
        });
    }

    @Action(MovieActions.FilterByGenre)
    searchByGenre(
        { getState, patchState }: StateContext<MovieStateModel>,
        { payload }: MovieActions.FilterByGenre
    ) {
        const state = getState();

        // tslint:disable-next-line:prefer-const
        let results: Movie[] = [];

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < state.movies.length; i++) {
            const result = state.movies[i].genres.filter(el => el.toLowerCase().indexOf(payload.toLowerCase()) !== -1);
            if (result.length > 0) {
                results.push(state.movies[i]);
            }
        }

        patchState({
            filterMovie: [...results]
        });
    }

    @Action(MovieActions.GetSelectedMovie)
    getSelectedMovie(
        { getState, patchState }: StateContext<MovieStateModel>,
        { payload }: MovieActions.GetSelectedMovie
    ) {
        const state = getState();

        patchState({
            selectedMovie: state.movies.find(a => a.id === payload)
        });
    }

    @Action(MovieActions.GetGenres)
    getAllGenres(
        { getState, patchState }: StateContext<MovieStateModel>
    ) {
        this.movieService.getAllGenres().pipe(take(1))
            .subscribe((genreList: GenreType[]) => {
                const state = getState();
                patchState({
                    genres: [...state.genres, ...genreList]
                });
            }, error => {
                const state = getState();
                patchState({
                    error: [...state.error, error]
                });
            });
    }

    @Action(MovieActions.GetMovies)
    getAllMovies(
        { getState, patchState }: StateContext<MovieStateModel>
    ) {
        this.movieService.getAllMovies().pipe(take(1))
            .subscribe((moviesList: Movie[]) => {
                const state = getState();
                patchState({
                    movies: [...state.movies, ...moviesList.sort((x, b) => b.rate - x.rate)]
                });
            }, error => {
                const state = getState();
                patchState({
                    error: [...state.error, error]
                });
            });
    }
}
