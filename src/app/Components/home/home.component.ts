import { Component } from '@angular/core';
import { IStore } from '../../Models/istore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {

  storeObj:IStore;

  /**
   *
   */
  constructor() {
    this.storeObj = {
      name:'Demo' , 
      imgUrl:'https://dummyimage.com/300x200/000/fff' , 
      branches: ["Cairo" , "Assuit", "BNS"]
    }
  }
}
