import { Component, OnInit, Inject } from '@angular/core';
import { Movie } from '../Models/movie';
import { DataRepository } from '../Repositories/DatabaseRepository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie: Movie | undefined;

  constructor(
    @Inject('DatabaseRepository') private repository : DataRepository
  ) {}

  ngOnInit(): void {
    this.repository.getMovies().then((movies) => {
      this.movies = movies;
    });
  }

  onMovieSelected(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
