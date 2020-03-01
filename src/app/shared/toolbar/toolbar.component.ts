import { FilterMovie } from './../../actions/movie.actions';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  // Input for the Title of the current Page
  @Input() title: string;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() { }

  onFilter($event: any) {
    // get data from the search component
    const searchKeyword = $event.target.value.toLowerCase();

    // pass in the keyword to the Filter Action
    this.store.dispatch(new FilterMovie(searchKeyword));

    // Navigate away from Toolbar to movie search page
    this.router.navigate(['/', 'movies', 'movie-search']);
  }
}
