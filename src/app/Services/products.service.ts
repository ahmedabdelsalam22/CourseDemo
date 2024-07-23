import { EventEmitter, Injectable, Output } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  prdList:IProduct[];
  shoppingCart:IProduct[]=[];

  constructor() 
  {
    this.prdList = [
      {id:7, name: "IPhone 13", price:30000 , quantity:4 , imgUrl:'https://dummyimage.com/100x100/000/fff' , catId:2},
      {id:15, name: "IPhone 6s", price:6000 , quantity:0 , imgUrl:'https://dummyimage.com/100x100/000/fff' , catId:2},
      {id:20, name: "Symsung A51", price:10000 , quantity:2 , imgUrl:'https://dummyimage.com/100x100/000/fff' , catId:2},
      {id:21, name: "Mac M1 2020", price:1000 , quantity:3 , imgUrl:'https://dummyimage.com/100x100/000/fff' , catId:1},
    ];

  }

  getProductsByCategory(catId:number)
  {
    if(catId == 0)
      {
        return this.prdList;
      }
      else
      {
        return this.prdList.filter(x=>x.catId == catId);
      }
  }

  totalPrice:number= 0;
  
  updateOrderTotalPrice(count:number , price:number , onTotalPriceChanges:EventEmitter<number>)
  {
    this.totalPrice += (count*price)
    onTotalPriceChanges.emit(this.totalPrice);
  }

  addProductToCart(prdId:number , onCartUpdated:EventEmitter<IProduct[]>)
  {
    let newProduct = this.prdList.find(x=>x.id == prdId) as IProduct;

    if(this.shoppingCart.includes(newProduct))
    {
        let prd = this.shoppingCart.find(x=>x.id == newProduct.id) as IProduct;
        prd.quantity++; 
    }
    else{
        this.shoppingCart.push(newProduct)
    }
    onCartUpdated.emit(this.shoppingCart);
  }
  

}
