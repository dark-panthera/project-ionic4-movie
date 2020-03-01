import { GenreType } from './genre.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private http: HttpClient) {

    }

    getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>('./../assets/movie-data.json');
    }

    getAllGenres(): Observable<GenreType[]> {
        return this.http.get<GenreType[]>('./../assets/genre-data.json');
    }
}
