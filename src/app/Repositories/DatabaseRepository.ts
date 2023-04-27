import { Actor } from "../Models/actor";
import { Movie } from "../Models/movie";

export interface DataRepository {
    createMovie(movie: Movie): Promise<Movie>;
    getMovieById(id: number): Promise<Movie | undefined>;
    updateMovie(movie: Movie): Promise<Movie | undefined>;
    deleteMovie(id: number): Promise<boolean>;
    getMovies(): Promise<Movie[]>;
  
    createActor(actor: Actor): Promise<Actor>;
    getActorById(id: number): Promise<Actor | undefined>;
    updateActor(actor: Actor): Promise<Actor | undefined>;
    deleteActor(id: number): Promise<boolean>;
}