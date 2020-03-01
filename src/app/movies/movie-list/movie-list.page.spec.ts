import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './../movie-card/movie-card.component';
import { ToolbarComponent } from './../../shared/toolbar/toolbar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieListPage } from './movie-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { MovieState } from 'src/app/state/movie.state';

describe('MovieListPage', () => {
  let component: MovieListPage;
  let fixture: ComponentFixture<MovieListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListPage ],
      imports: [IonicModule.forRoot(), SharedModule, RouterTestingModule.withRoutes([]), NgxsModule.forRoot([MovieState]), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
