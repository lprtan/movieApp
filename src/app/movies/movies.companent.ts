import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";
@Component({
    selector: 'movies', // <movies></movies>
    templateUrl: 'movies.component.html'
})
export class MoviesCompanent {
    title='Movie List';
    movies= Movies;
}
