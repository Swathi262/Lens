import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Frame } from '../_Models/frame.model';

@Injectable({
  providedIn: 'root'
})
export class FramesService {

  //constructor() { }
  private baseURL = "http://localhost:1581/api/frame/allframes"

  constructor(private httpClient: HttpClient) { }
  getFramesList(): Observable<Frame[]>{

    return this.httpClient.get<Frame[]>(`${this.baseURL}`);

  }

  createFrame(frame: Frame): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`,frame);

  }
}
