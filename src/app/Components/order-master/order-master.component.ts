import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent {

}
