import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.generateMoviesWithDummyImages();
  }
  
  // Generate a dummy image URL for testing
  generateDummyImageURL(): string {
    const width = 300;
    const height = 400;
    const randomImageIndex = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    return `https://via.placeholder.com/${width}x${height}?text=Movie${randomImageIndex}`;
  }

  // Generate and store movies with dummy image URLs in localStorage
  generateMoviesWithDummyImages(): void {
    const movies: Movie[] = [];
    for (let i = 1; i <= 10; i++) {
      const movie = new Movie(i, `Movie ${i}`, "Action", new Date(), 1000, this.generateDummyImageURL());
      movies.push(movie);
    }
    localStorage.setItem("movies", JSON.stringify(movies));
  }
}
