export class GetMovies {
    static readonly type = '[App Component] Get Movies';
}

export class GetGenres {
    static readonly type = '[App Component] Get Genres';
}

export class GetSelectedMovie {
    static readonly type = '[Search Component] Get selected Movie';

    constructor(public payload: number) { }
}

export class FilterMovie {
    static readonly type = '[Toolbar] Filter Movie';

    constructor(public payload: string) { }
}

export class FilterByGenre {
    static readonly type = '[App Component] Filter By Genre';

    constructor(public payload: string) { }
}
