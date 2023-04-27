export class Movie {
    id: number;
    name: string;
    type: string;
    releaseDate: Date;
    publicAmount: number;
    photo: string;
  
    constructor(id: number, name: string, type: string, releaseDate: Date, publicAmount: number, photo: string) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.releaseDate = releaseDate;
      this.publicAmount = publicAmount;
      this.photo = photo;
    }
  }
  