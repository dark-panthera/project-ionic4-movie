import { Movie } from './movie.model';
import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { take } from 'rxjs/operators';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

let service: MovieService = null;

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule]
    });

    service = TestBed.get(MovieService);
  });

  it('should be created', () => {
    service = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('should return an empty array', () => {
    service.getAllMovies().pipe(take(1)).subscribe(result => {
      expect(result.length).toBe(0);
    });
  });

  it('should return an empty array', () => {
    service.getAllGenres().pipe(take(1)).subscribe(result => {
      expect(result.length).toBe(0);
    });
  });
});
