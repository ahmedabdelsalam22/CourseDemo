import { Component, EventEmitter, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../Services/products.service';
import { Router } from '@angular/router';
import { ProductsAPIService } from '../../Services/products-api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnChanges{

  totalPrice:number= 0;

  prdListByCatId:IProduct[] = [];

  @Input() CategoryId:number=0;
  @Output() onTotalPriceChanges:EventEmitter<number>;
  @Output() onCartUpdated:EventEmitter<IProduct[]>;

  constructor(private productService:ProductsService , private router:Router, private prdApi:ProductsAPIService) {
    this.onTotalPriceChanges = new EventEmitter<number>();
    this.onCartUpdated = new EventEmitter<IProduct[]>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //this.prdListByCatId = this.productService.getProductsByCategory(this.CategoryId);
    /*this.prdApi.getProductByCatId(this.CategoryId).subscribe(prd=>{
      this.prdListByCatId = prd; 
    });*/
    this.getProductsByCategory(this.CategoryId);
  }

  /*  
  productTrackedBy(index:number, item:IProduct)
  {
    return item.id;
  }
  */

  getProductsByCategory(catId:number)
  {
      if(catId == 0)
      {
         this.prdApi.getAllProducts().subscribe(data=>{
          this.prdListByCatId = data; 
         });
      }
      else
      {
        this.prdApi.getProductByCatId(this.CategoryId).subscribe(prd=>{
          this.prdListByCatId = prd; 
        });
      }

      return this.prdListByCatId;
  }

  addToCart(prdId:number , count:number , price:number)
  {
      this.productService.updateOrderTotalPrice(count , price , this.onTotalPriceChanges);
      
      this.productService.addProductToCart(prdId , this.onCartUpdated);
  }

  openProductDetails(pid:number)
  {
   this.router.navigate(['/ProductDetails' , pid]);
  }
}
