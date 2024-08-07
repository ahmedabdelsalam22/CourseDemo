import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { ProductsService } from '../../Services/products.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnDestroy{

  private pid:number;
  product:IProduct;

  // to store all subiscriptions to can unsubiscription all of it in component destroy.
  private subiscription:Subscription[]=[]; 


  constructor(private activatedRoute:ActivatedRoute, 
    private productService:ProductsService,
    private location:Location) {
    this.pid = Number(activatedRoute.snapshot.paramMap.get('pid'));
    this.product = productService.getProductsById(this.pid) as IProduct;

    let sub = activatedRoute.paramMap.subscribe({
      next:(data)=>{},
      error:(err)=>{},
      complete:()=>{}
    });
    // after any subiscription, i will add it to subiscription arr 
    this.subiscription.push(sub);
  }

  // unSubiscription from all subiscriptions when destroy component.
  ngOnDestroy(): void {
    /*
    this.subiscription.forEach((item, index) => {
      item.unsubscribe();
    }); */
    for(let sub of this.subiscription)
    {
      sub.unsubscribe();
    } 
  }

  back(){
    this.location.back();
  }

}
