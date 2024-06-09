import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Glasses } from '../_Models/glasses.model';

@Injectable({
  providedIn: 'root'
})
export class GlassesService {
  private baseURL ="http://localhost:1581/api/glass/allglass"
  constructor(private httpClient: HttpClient) { }

  getGlassesList(): Observable<Glasses[]>{

    return this.httpClient.get<Glasses[]>(`${this.baseURL}`);



  }

  createGlasses(glasses: Glasses): Observable<object>{

  return this.httpClient.post(`${this.baseURL}`, glasses);

  }

}

