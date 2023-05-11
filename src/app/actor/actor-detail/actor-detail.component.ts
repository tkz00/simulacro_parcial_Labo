import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/Models/actor';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent {
  @Input() actor: Actor | undefined;
}
