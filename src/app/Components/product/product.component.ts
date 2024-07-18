import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  prdList:IProduct[];

  constructor() {
    this.prdList = [
      {id:1, name: "IPhone 13", price:30000 , quantity:4 , imgUrl:'https://dummyimage.com/300x200/000/fff' , catId:1},
      {id:2, name: "IPhone 6s", price:6000 , quantity:1 , imgUrl:'https://dummyimage.com/300x200/000/fff' , catId:1},
      {id:3, name: "Symsung A51", price:10000 , quantity:2 , imgUrl:'https://dummyimage.com/300x200/000/fff' , catId:2},
    ];
  }
}
