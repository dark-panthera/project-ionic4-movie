import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieDetailPage } from './movie-detail.page';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { MovieState } from 'src/app/state/movie.state';
import { HttpClientModule } from '@angular/common/http';

describe('MovieDetailPage', () => {
  let component: MovieDetailPage;
  let fixture: ComponentFixture<MovieDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([]), NgxsModule.forRoot([MovieState]), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
