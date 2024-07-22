import { Component, EventEmitter, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnChanges{

  prdList:IProduct[];
  @Input() CategoryId:number=0;
  totalPrice:number= 0;

  prdListByCatId:IProduct[] = [];

  @Output() onTotalPriceChanges:EventEmitter<number>;

  shoppingCart:IProduct[]=[];

  @Output() onCartUpdated:EventEmitter<IProduct[]>;

  constructor() {
    this.prdList = [
      {id:7, name: "IPhone 13", price:30000 , quantity:4 , imgUrl:'https://dummyimage.com/100x100/000/fff' , catId:2},
      {id:15, name: "IPhone 6s", price:6000 , quantity:0 , imgUrl:'https://dummyimage.com/100x100/000/fff' , catId:2},
      {id:20, name: "Symsung A51", price:10000 , quantity:2 , imgUrl:'https://dummyimage.com/100x100/000/fff' , catId:2},
      {id:21, name: "Mac M1 2020", price:1000 , quantity:3 , imgUrl:'https://dummyimage.com/100x100/000/fff' , catId:1},
    ];

    this.onTotalPriceChanges = new EventEmitter<number>();
    this.onCartUpdated = new EventEmitter<IProduct[]>();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.CategoryId == 0)
    {
      this.prdListByCatId = this.prdList;
    }
    else
    {
      this.prdListByCatId = this.prdList.filter(x=>x.catId == this.CategoryId);
    }
  }

  /* 
  productTrackedBy(index:number, item:IProduct)
  {
    return item.id;
  }
  */

  updateOrderTotalPrice(count:number , price:number)
  {
    this.totalPrice += (count*price)
    this.onTotalPriceChanges.emit(this.totalPrice);
  }

  addToCart(prdId:number , count:number , price:number)
  {
      // update total price
      this.totalPrice += (count*price)
      this.onTotalPriceChanges.emit(this.totalPrice);
      
      
      // add prd to cart
      let newProduct = this.prdList.find(x=>x.id == prdId) as IProduct;
      
      if(this.shoppingCart.includes(newProduct))
      {
        let prd = this.shoppingCart.find(x=>x.id == newProduct.id) as IProduct;
        prd.quantity++; 
      }
      else{
        this.shoppingCart.push(newProduct)
      } 
      
     this.onCartUpdated.emit(this.shoppingCart);
  }

}
