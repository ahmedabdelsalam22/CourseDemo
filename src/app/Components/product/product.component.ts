import { Component, EventEmitter, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../Services/products.service';

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

  constructor(private productService:ProductsService) {
    this.onTotalPriceChanges = new EventEmitter<number>();
    this.onCartUpdated = new EventEmitter<IProduct[]>();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.prdListByCatId = this.productService.getProductsByCategory(this.CategoryId);
  }

  /* 
  productTrackedBy(index:number, item:IProduct)
  {
    return item.id;
  }
  */

  addToCart(prdId:number , count:number , price:number)
  {
      this.productService.updateOrderTotalPrice(count , price , this.onTotalPriceChanges);
      
      this.productService.addProductToCart(prdId , this.onCartUpdated);
  }

}
