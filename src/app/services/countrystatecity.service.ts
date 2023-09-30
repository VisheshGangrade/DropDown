import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountrystatecityService {

  constructor(private httpclient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        
    })
    };

  getCountry(): Observable<any>{
    return this.httpclient.get(`https://geodata.phplift.net/api/index.php?type=getCountries`)
  }

  getStateOfSelectedCountry(countryIso: string): Observable<any>{
    return this.httpclient.get(`https://geodata.phplift.net/api/index.php?type=getStates&countryId=${countryIso}` )
  }

  getCitiesOfSelectedState(countryIso: any, stateIso: any): Observable<any>{
    return this.httpclient.get(`https://geodata.phplift.net/api/index.php?type=getCities&countryId=${countryIso}&stateId=${stateIso}`)
  }
}
