import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  private baseApiUrl:string="http://localhost:3000/";
  private productsUrl:string = this.baseApiUrl+"products";
  private categoriesUrl:string = this.baseApiUrl+"categories";

  constructor(private http:HttpClient){}
  
  getAllProducts() : Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productsUrl);
  }

  getProductByCatId(catId:number): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productsUrl+catId);
  }


}



