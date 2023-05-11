import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CreateActorComponent } from './actor/create-actor/create-actor.component';
import { ListActorComponent } from './actor/list-actor/list-actor.component';
import { ListMovieComponent } from './movie/list-movie/list-movie.component';
import { MovieActorComponent } from './actor/movie-actor/movie-actor.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'create-movie', component: CreateMovieComponent },
    { path: 'create-actor', component: CreateActorComponent },
    { path: 'list-actor', component: ListActorComponent },
    { path: 'list-movie', component: ListMovieComponent },
    { path: 'movie-actor', component: MovieActorComponent},
    { path: '', component: HomeComponent},
    // { path: '**', component: ErrorComponent}
];
  
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
