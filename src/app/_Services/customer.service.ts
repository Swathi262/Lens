import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Customer } from '../_Models/customer.model';

@Injectable({
  providedIn: 'root'

})
export class CustomerService {
  private _baseUrl="http://localhost:1581/api/customers/allcustomers"
  constructor(private  http:HttpClient) { }

  addNewCustomer(customerobj:Customer):Observable<any>{
    return this.http.post<any>('_baseUrl',customerobj);
  }

  getCustomerList():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this._baseUrl}`);
  }

  getCustomerById(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this._baseUrl}`+"/"+id);
  }

  deleteCustomer(id:number):Observable<any>{
    return this.http.delete<any>(`${this._baseUrl}`+"/"+id);

  }

  updateCustomer(id:number,customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this._baseUrl}`+"/"+id,customer);
  }

  
}
