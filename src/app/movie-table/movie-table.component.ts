import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../Models/movie';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {
  @Input() movies: Movie[] = [];
  @Input() selectedMovie: Movie | undefined;
  @Output() movieSelected: EventEmitter<Movie> = new EventEmitter<Movie>();

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
    this.movieSelected.emit(movie);
  }

  isSelected(movie: Movie): boolean {
    return movie === this.selectedMovie;
  }
}
