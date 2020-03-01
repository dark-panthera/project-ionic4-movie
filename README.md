Panthera Movies

Makes use of Ionic 4 + Angular 8

Steps to run the application
- write ionic serve (it works on various environments)

Steps to build the application
- write ionic build
- It will generate the build application, inside a www folder, and can deploy it to a hosting service provider
- Ionic makes use of both pages and components

Steps to run the test
- ionic serve
- npm test

State Management
- This app uses NgXs alternative to Redux or NgRx
- Using mocking data for API
- Selectors: 
  - getMovies: get all movies from the Store
  - getGenres: get all genres from the store
  - getHighestRatedMovies: get the first 5 highest rated movies
- Actions:
  - FilterMovie: search part of the movie name
  - FilterByGenre: search movie if has any of the inserted genre
  - GetSelectedMovie: Retrieve the selected movie information
  - GetGenres: Get All Genres from the Movie Service
  - GetMovies: Get All Movies from the Movie Service 

API:
- Mocking API are in assets folder

Images:
- Images can be located in the assets/images/movie-covers folder

General Information about the Application
- Panthera Rating has a side menu with Two navigation items:
 - Popular redirects to movies page (Home Page)
 - Movie List redirects to movies-list that will display all available movies, thankfully, the Ionic 4 makes use of virtual loading whilst scrolling
- It also has a search component item within the Toolbar that enables the user to search a specific keyword for any movie name, the user will automatically be redirected to movie-search page with any matching movie title. 
  Each movie card has a button icon that will redirect the user to movie-detail page which will display the rest of the information of the movie.
 - The movie-detail has a animated back button so that it will redirect the user back to the previous page.
- The site has also another search option by grouping movies into categories, by clicking on the side menu or else dragging by mouse movement, or by finger gesture on the side, it will display a list of genres, when clicking on a specific genre 
  the user will be redirected inside the movie-search component that will display movies that fall under that genre.
- Each routing navigation is animated.
- Each page has a unit testing
- Common Shared Components are placed inside a Shared Module and added to the required pages

Folder Structure:
- Ionic 4: Automatically generates theme folder (variable.scss and global.scss)
- app (folder)
 - actions (folder)
   - movie.actions.ts
 - movies (folder)
   - movies.page.ts
   - movies-routing.module.ts
   - movie.service.ts
   - genre.model.ts
   - movie.model.ts
   - movie-card (folder)
     - movie-card.component.html
   - movie-detail (folder)
     - movie-detail.page.html
   - movie-list (folder)
     - movie-list.page.html
   - movie-search (folder)
     - movie-search.page.html
 - shared (folder)
   - toolbar (folder)
     - toolbar component that will be shared by various pages
   - shared.module.ts (ToolbarComponent, MovieCardComponent and added also the router Module since it will also be required)
 - state (folder)
   - movie.state.ts
 - app-routing.module.ts


