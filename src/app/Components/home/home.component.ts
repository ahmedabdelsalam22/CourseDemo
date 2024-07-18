import { Component } from '@angular/core';
import { IStore } from '../../Models/istore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {

  storeObj:IStore;
  isImgHidden:boolean = false;
  feedBack:string = "For testing";

  constructor() {
    this.storeObj = {
      name:'Demo' , 
      imgUrl:'https://dummyimage.com/300x200/000/fff' , 
      branches: ["Cairo" , "Assuit", "BNS"]
    }
  }

  HideImg()
  {
    this.isImgHidden = !this.isImgHidden;

    console.log(this.isImgHidden)
  }
}
