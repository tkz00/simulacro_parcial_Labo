import { Component, Inject, OnInit } from '@angular/core';
import { Actor } from 'src/app/Models/actor';
import { DataRepository } from 'src/app/Repositories/DatabaseRepository';

@Component({
  selector: 'app-list-actor',
  templateUrl: './list-actor.component.html',
  styleUrls: ['./list-actor.component.css']
})
export class ListActorComponent implements OnInit{
  actors: Actor[];

  constructor(
    @Inject('DatabaseRepository') private repository : DataRepository
  )
  {
    this.actors = [];
  }

  async ngOnInit(): Promise<void> {
    const actors = await this.repository.getActors(); 
    console.log(actors);
    this.actors = actors;
  }
}
