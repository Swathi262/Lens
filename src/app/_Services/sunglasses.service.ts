import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Sunglasses } from '../_Models/sunglasses.model';


@Injectable({
  providedIn: 'root'
})
export class SunglassesService {

  // constructor() { }
  private baseURL = "http://localhost:1581/api/sunglasses/allsunglasses"

  constructor(private httpClient: HttpClient) { }



  getSunGlassesList(): Observable<Sunglasses[]>{

    return this.httpClient.get<Sunglasses[]>(`${this.baseURL}`);

  }

  createSunGlasses(sunglasses: Sunglasses): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`,Sunglasses);

  }
}
