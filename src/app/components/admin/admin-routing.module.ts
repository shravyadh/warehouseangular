import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { CustomerComponent } from '../customer/customer.component';
import { GetCustomerComponent } from '../get-customer/get-customer.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'items', component: ItemListComponent
      },
      {
        path: 'customer', component: CustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
