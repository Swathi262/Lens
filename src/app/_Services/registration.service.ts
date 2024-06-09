import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_Models/user.model';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
  public loginUserFromRemote(user :User):Observable<any>{
   return this._http.post<any>("http://localhost:1581/api/login",user)
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:1581/api/customers",user);
  }
}
