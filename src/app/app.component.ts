import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { SidebarComponent } from "./Components/sidebar/sidebar.component";
import { HomeComponent } from "./Components/home/home.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "./Components/product/product.component";
import { OrderMasterComponent } from "./Components/order-master/order-master.component";
import { EmpComponent } from "./Components/emp/emp.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, HomeComponent, FooterComponent, FormsModule,
     ProductComponent, OrderMasterComponent, EmpComponent, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'CourseDemo';
}
