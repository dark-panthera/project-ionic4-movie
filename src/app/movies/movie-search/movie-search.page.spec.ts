import { MovieState } from 'src/app/state/movie.state';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieSearchPage } from './movie-search.page';
import { ToolbarComponent } from 'src/app/shared/toolbar/toolbar.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';

describe('MovieSearchPage', () => {
  let component: MovieSearchPage;
  let fixture: ComponentFixture<MovieSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchPage  ],
      imports: [IonicModule.forRoot(), SharedModule, RouterTestingModule.withRoutes([]), NgxsModule.forRoot([MovieState]), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
