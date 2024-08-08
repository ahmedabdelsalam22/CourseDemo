import { Component } from '@angular/core';
import { ProductsAPIService } from '../../Services/products-api.service';
import { Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class EditProductComponent{
  
  
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
  
  constructor(private prdApi:ProductsAPIService, private router:Router) {
    
  }

  updateProduct()
  {
    this.prdApi.updateProduct(21, this.editedPrd).subscribe(data=>{
      this.router.navigate(['/Order']);
   });
  }
}
