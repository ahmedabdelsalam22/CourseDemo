import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductsAPIService } from '../../Services/products-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class AddProductComponent{
 
  prd:IProduct;

  constructor(private prdApi:ProductsAPIService, private router:Router) {
    this.prd = {
      id: 222,
      name: "Nokia",
      price: 6000,
      quantity: 2,
      imgUrl: "https://picsum.photos/seed/picsum/100/100",
      catId: 2,
      details: "Lorem has been the industry's standard dummy texve centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  }

  addPrd()
  {
     this.prdApi.createProduct(this.prd).subscribe(data=>{
        this.router.navigate(['/Order']);
     });
  }
}
