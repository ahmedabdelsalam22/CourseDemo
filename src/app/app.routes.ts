import { Routes } from '@angular/router';
import { EmpComponent } from './Components/emp/emp.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';

export const routes: Routes = 
[
    {path:'' , redirectTo:'/Order' , pathMatch:'full'}, // Default Path .. if user does't write path after domain name 
    {path:"Employes" , component:EmpComponent},
    {path:"Order" , component:OrderMasterComponent},
    {path:"**" , component:HomeComponent},
];
