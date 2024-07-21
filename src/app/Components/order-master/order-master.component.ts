import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ICategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [ProductComponent, CommonModule, FormsModule],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent {

  catList:ICategory[];
  selectedCateId:number=0;

  constructor() {
    this.catList = [
      {id:1, name: "Pc" },
      {id:2, name: "Mobile" },
      {id:3, name: "Accessoires" },
    ];
  }

}
