import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from '../Models/actor';
import { Movie } from '../Models/movie';
import { DataRepository } from '../Repositories/DatabaseRepository';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {
  movieForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      @Inject('DatabaseRepository') private repository : DataRepository
    ) {
    this.movieForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      releaseDate: ['', Validators.required],
      publicAmount: ['', Validators.required],
      photo: ['', Validators.required],
      actor: [null, Validators.required]
    });
  }

  createMovie() {
    if (this.movieForm.invalid) {
      // Perform any necessary error handling or validation feedback
      return;
    }

    const movieData = this.movieForm.value;

    // Create the movie instance
    const newMovie = this.repository.createMovie(new Movie(
      0, // id will be assigned by the repository
      movieData.name,
      movieData.type,
      new Date(movieData.releaseDate),
      movieData.publicAmount,
      movieData.photo,
      movieData.actor
    ));

    // Perform any additional actions with the new movie, such as sending it to an API or updating a database

    // Reset the form or perform any necessary cleanup
    this.movieForm.reset();
  }

  onActorSelected(actor: Actor) {
    this.movieForm.patchValue({
      actor: actor
    })
  }

  resetForm() {
    this.movieForm.reset();
  }
}
