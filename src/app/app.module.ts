import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { ListActorComponent } from './actor/list-actor/list-actor.component';
import { ListMovieComponent } from './movie/list-movie/list-movie.component';
import { MovieTableComponent } from './movie/movie-table/movie-table.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { CreateActorComponent } from './actor/create-actor/create-actor.component';

import { LocalStorageRepository } from './Repositories/LocalStorageRepository';
import { CountryService } from './Services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryTableComponent } from './country/country-table/country-table.component';
import { ActorTableComponent } from './actor/actor-table/actor-table.component';
import { MovieActorComponent } from './actor/movie-actor/movie-actor.component';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CreateMovieComponent,
    CreateActorComponent,
    ListActorComponent,
    ListMovieComponent,
    MovieTableComponent,
    MovieDetailComponent,
    CountryTableComponent,
    ActorTableComponent,
    MovieActorComponent,
    CountryDetailComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'DatabaseRepository', useClass: LocalStorageRepository},
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
