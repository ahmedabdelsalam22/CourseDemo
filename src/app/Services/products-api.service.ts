import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { json } from 'stream/consumers';
import { IpcNetConnectOpts } from 'net';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  private baseApiUrl:string="http://localhost:3000/";
  private productsUrl:string = this.baseApiUrl+"products";
  private categoriesUrl:string = this.baseApiUrl+"categories";

  private httpOptions;

  constructor(private http:HttpClient){
    this.httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }
  }
  
  getAllProducts() : Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productsUrl);
  }

  getProductByCatId(catId:number): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productsUrl+"/"+catId);
  }

  createProduct(prd:IProduct) : Observable<IProduct>
  {
    return this.http.post<IProduct>(this.productsUrl, prd, this.httpOptions);
  }

  updateProduct(pid:number, prd:IProduct):Observable<IProduct>
  {
    return this.http.put<IProduct>(this.productsUrl+"/"+pid , prd, this.httpOptions);
  }

  deleteProduct(pid:number) : Observable<IProduct>
  {
    return this.http.delete<IProduct>(this.productsUrl+"/"+pid);
  }


}



