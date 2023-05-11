import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Actor } from '../../Models/actor';
import { DataRepository } from '../../Repositories/DatabaseRepository';

@Component({
  selector: 'app-actor-table',
  templateUrl: './actor-table.component.html',
  styleUrls: ['./actor-table.component.css']
})
export class ActorTableComponent implements OnInit {
  actors: Actor[];
  selectedActor: Actor | null = null;
  @Output() actorSelected = new EventEmitter<Actor>();

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

  onActorSelect(actor: Actor) {
    this.selectedActor = actor;
    this.actorSelected.emit(actor);
  }

  reset()
  {
    this.selectedActor = null;
  }
}
