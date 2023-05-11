import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { Actor } from '../Models/actor';
import { Country } from '../Models/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void { }
}
