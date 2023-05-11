import { Component, Inject } from '@angular/core';
import { Actor } from 'src/app/Models/actor';
import { Country } from 'src/app/Models/country';
import { Movie } from 'src/app/Models/movie';
import { DataRepository } from 'src/app/Repositories/DatabaseRepository';

@Component({
  selector: 'app-movie-actor',
  templateUrl: './movie-actor.component.html',
  styleUrls: ['./movie-actor.component.css']
})
export class MovieActorComponent {
  selectedActor: Actor | undefined;
  movies: Movie[] = [];
  country: Country | undefined;

  constructor(
    @Inject('DatabaseRepository') private repository : DataRepository
  ) { }

  onActorSelected(actor: Actor) {
    this.selectedActor = actor;
    this.country = actor.country;
    this.getMovies(actor);
  }
  
  async getMovies(actor: Actor) {
    const movies = await this.repository.getMovies();
    this.movies = movies.filter((movie) => movie.actor.id === actor.id);
  }
}


