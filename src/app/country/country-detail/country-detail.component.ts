import { Component, Input } from '@angular/core';
import { Country } from 'src/app/Models/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent {
  @Input() country: Country | undefined;
}
