import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviesPage } from './movies.page';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { MovieState } from '../state/movie.state';

describe('MoviesPage', () => {
  let component: MoviesPage;
  let fixture: ComponentFixture<MoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([]), NgxsModule.forRoot([MovieState]), SharedModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
