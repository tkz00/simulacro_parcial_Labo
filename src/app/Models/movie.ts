import { Actor } from "./actor";

export class Movie {
    id: number;
    name: string;
    type: string;
    releaseDate: Date;
    publicAmount: number;
    photo: string;
    actor: Actor;
  
    constructor(id: number, name: string, type: string, releaseDate: Date, publicAmount: number, photo: string, actor: Actor) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.releaseDate = releaseDate;
      this.publicAmount = publicAmount;
      this.photo = photo;
      this.actor = actor;
    }
  }
  