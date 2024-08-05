import { Routes } from '@angular/router';
import { EmpComponent } from './Components/emp/emp.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

export const routes: Routes = 
[
    {path:'' , component:MainLayoutComponent , children:[
        {path:'' , redirectTo:'/Employes' , pathMatch:'full'}, // Default Path .. if user does't write path after domain name 
        {path:"Employes" , component:EmpComponent},
        {path:"Order" , component:OrderMasterComponent},
        {path:"ProductDetails/:pid" , component:ProductDetailsComponent},
    ]},
    {path:"Register" , component:UserRegisterComponent},
    {path:"**" , component:NotFoundComponent},
];
