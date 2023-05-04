import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../Models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<any[]>(this.countriesUrl).pipe(
      map(response => this.convertToCountries(response))
    );
  }

  private convertToCountries(response: any[]): Country[] {
    const countries = response.map(countryData => {
      return new Country(
        countryData.name.common,
        countryData.flags.png
      );
    });

    return countries.sort((a, b) => a.name.localeCompare(b.name));
  }
}
