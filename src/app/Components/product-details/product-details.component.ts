import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  private pid:number;
  product:IProduct;

  constructor(private activatedRoute:ActivatedRoute, private productService:ProductsService) {
    this.pid = Number(activatedRoute.snapshot.paramMap.get('pid'));
    this.product = productService.getProductsById(this.pid) as IProduct;
  }



}
