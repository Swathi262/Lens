import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _baseUrl="http://localhost:1581/api/products";
  constructor(private http:HttpClient) { }
  getProductList():Observable<Product[]>{

    return this.http.get<Product[]>(`${this._baseUrl}`);

  }
}
