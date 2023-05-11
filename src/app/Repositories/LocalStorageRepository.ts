import { Injectable } from "@angular/core";
import { Actor } from "../Models/actor";
import { Movie } from "../Models/movie";
import { DataRepository } from "./DatabaseRepository";

@Injectable()
export class LocalStorageRepository implements DataRepository {
    private moviesKey = 'movies';
    private actorsKey = 'actors';
  
    private getMoviesFromLocalStorage(): Movie[] {
      const moviesJson = localStorage.getItem(this.moviesKey);
      return moviesJson ? JSON.parse(moviesJson) : [];
    }
  
    private setMoviesToLocalStorage(movies: Movie[]): void {
      localStorage.setItem(this.moviesKey, JSON.stringify(movies));
    }
  
    private getActorsFromLocalStorage(): Actor[] {
      const actorsJson = localStorage.getItem(this.actorsKey);
      return actorsJson ? JSON.parse(actorsJson) : [];
    }
  
    private setActorsToLocalStorage(actors: Actor[]): void {
      localStorage.setItem(this.actorsKey, JSON.stringify(actors));
    }
  
    createMovie(movie: Movie): Promise<Movie> {
      const movies = this.getMoviesFromLocalStorage();
      const newMovie = { ...movie, id: Date.now() };
      movies.push(newMovie);
      this.setMoviesToLocalStorage(movies);
      return Promise.resolve(newMovie);
    }
  
    getMovieById(id: number): Promise<Movie | undefined> {
      const movies = this.getMoviesFromLocalStorage();
      const movie = movies.find((m) => m.id === id);
      return Promise.resolve(movie);
    }
  
    updateMovie(movie: Movie): Promise<Movie | undefined> {
      const movies = this.getMoviesFromLocalStorage();
      const index = movies.findIndex((m) => m.id === movie.id);
      if (index !== -1) {
        movies[index] = movie;
        this.setMoviesToLocalStorage(movies);
        return Promise.resolve(movie);
      }
      return Promise.resolve(undefined);
    }
  
    deleteMovie(id: number): Promise<boolean> {
      let movies = this.getMoviesFromLocalStorage();
      const index = movies.findIndex((m) => m.id === id);
      if (index !== -1) {
        movies = movies.filter((m) => m.id !== id);
        this.setMoviesToLocalStorage(movies);
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    }

    getMovies(): Promise<Movie[]> {
        const movies = this.getMoviesFromLocalStorage();
        return Promise.resolve(movies);
    }
  
    createActor(actor: Actor): Promise<Actor> {
      const actors = this.getActorsFromLocalStorage();
      const newActor = { ...actor, id: Date.now() };
      actors.push(newActor);
      this.setActorsToLocalStorage(actors);
      return Promise.resolve(newActor);
    }
  
    getActorById(id: number): Promise<Actor | undefined> {
      const actors = this.getActorsFromLocalStorage();
      const actor = actors.find((a) => a.id === id);
      return Promise.resolve(actor);
    }
  
    updateActor(actor: Actor): Promise<Actor | undefined> {
      const actors = this.getActorsFromLocalStorage();
      const index = actors.findIndex((a) => a.id === actor.id);
      if (index !== -1) {
        actors[index] = actor;
        this.setActorsToLocalStorage(actors);
        return Promise.resolve(actor);
      }
      return Promise.resolve(undefined);
    }

    deleteActor(id: number): Promise<boolean> {
      let actors = this.getActorsFromLocalStorage();
      const index = actors.findIndex((a) => a.id === id);
      if (index !== -1) {
        actors = actors.filter((a) => a.id !== id);
        this.setActorsToLocalStorage(actors);
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    }

    getActors(): Promise<Actor[]> {
      const actors = this.getActorsFromLocalStorage();
      return Promise.resolve(actors);
    }
  }
  