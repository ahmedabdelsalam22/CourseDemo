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

  editedPrd:IProduct=
  {
    id: 21,
    name: "Mac M1 2020",
    price: 1000,
    quantity: 3,
    imgUrl: "https://picsum.photos/100/100/?blur",
    catId: 1,
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }

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

  updateProduct(pid:number)
  {
    this.prdApi.updateProduct(pid, this.editedPrd).subscribe(data=>{
      this.router.navigate(['/Order']);
      window.location.reload();
   });
  }

  deleteProduct(pid:number)
  {
    this.prdApi.deleteProduct(pid).subscribe(data=>{
      this.router.navigate(['/Order']);
      window.location.reload();
   });
  }

}
