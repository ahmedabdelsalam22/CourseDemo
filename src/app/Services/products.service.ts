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
      {id:7, name: "IPhone 13", price:30000 , quantity:4 , imgUrl:'https://dummyimage.com/100x100/000/fff' , 
        catId:2,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
      {id:15, name: "IPhone 6s", price:6000 , quantity:0 , imgUrl:'https://dummyimage.com/100x100/000/fff' , 
        catId:2,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
      {id:20, name: "Symsung A51", price:10000 , quantity:2 , imgUrl:'https://dummyimage.com/100x100/000/fff' ,
         catId:2,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
      {id:21, name: "Mac M1 2020", price:1000 , quantity:3 , imgUrl:'https://dummyimage.com/100x100/000/fff' ,
         catId:1,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
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


  getProductsById(pid:number)
  {
    return this.prdList.find(x=>x.id == pid);
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
