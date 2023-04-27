import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CreateActorComponent } from './create-actor/create-actor.component';
import { ListActorComponent } from './list-actor/list-actor.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { LocalStorageRepository } from './Repositories/LocalStorageRepository';

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
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'DatabaseRepository', useClass: LocalStorageRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
