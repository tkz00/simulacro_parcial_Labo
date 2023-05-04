import { Component, Inject, OnInit } from '@angular/core';
import { Actor } from '../Models/actor';
import { Country } from '../Models/country';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataRepository } from '../Repositories/DatabaseRepository';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent {
  actorForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      @Inject('DatabaseRepository') private repository : DataRepository
    ) {
    this.actorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      address: ['', Validators.required],
      country: [null, Validators.required]
    });
  }

  createActor() {
    if (this.actorForm.invalid) {
      // Perform any necessary error handling or validation feedback
      return;
    }

    const actorData = this.actorForm.value;

    // Create the actor instance
    const newActor = this.repository.createActor(new Actor(
      actorData.firstName,
      actorData.lastName,
      actorData.email,
      actorData.userName,
      actorData.address,
      actorData.country
    ));

    // Perform any additional actions with the new actor, such as sending it to an API or updating a database

    // Reset the form or perform any necessary cleanup
    this.actorForm.reset();
  }

  onCountrySelected(country: Country) {
    this.actorForm.patchValue({
      country: country
    })
  }

  resetForm() {
    this.actorForm.reset();
  }
}
