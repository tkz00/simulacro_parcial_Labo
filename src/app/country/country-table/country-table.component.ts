import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '../../Models/country';
import { CountryService } from '../../Services/country.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  countries: Country[];
  selectedCountry: Country | null = null;
  @Output() countrySelected = new EventEmitter<Country>();

  constructor(
    private countryService : CountryService
  )
  {
    this.countries = [];
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      countries => this.countries = countries,
      error => console.error(error)
    );
  }

  onCountrySelect(country: Country) {
    this.selectedCountry = country;
    this.countrySelected.emit(country);
  }

  reset()
  {
    this.selectedCountry = null;
  }
}
