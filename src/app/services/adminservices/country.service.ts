import { Injectable } from '@angular/core';
import { Country } from 'src/app/models/country';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api_Get_Countries } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http : HttpClient) { }

  getCountries() : Observable<Country[]>
  {
    return this.http.get<Country[]>(Api_Get_Countries);
  }
}
