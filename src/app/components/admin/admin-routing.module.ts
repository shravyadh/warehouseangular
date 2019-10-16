import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ItemListComponent } from '../item-components/item-list/item-list.component';
import { CustomerComponent } from '../customer-components/customer/customer.component';
import { GetCustomerComponent } from '../customer-components/get-customer/get-customer.component';
import { AddCustomerComponent } from '../customer-components/add-customer/add-customer.component';
import { DeleteCustomerComponent } from '../customer-components/delete-customer/delete-customer.component';
import { DeleteItemComponent } from '../item-components/delete-item/delete-item.component';
import { AddStockComponent } from '../item-components/add-stock/add-stock.component';
import { PurchaseDetailsComponent } from '../item-components/purchase-details/purchase-details.component';
import { AdminGuard } from 'src/app/guards/admin.guard';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AdminGuard],
    children: [
      {
        path: 'items', component: ItemListComponent
      },
      {
        path: 'customer', component: CustomerComponent, children: [
          {path: 'getcustomer', component: GetCustomerComponent}
        ]
      },
      {
        path: 'addcustomer', component: AddCustomerComponent
      },
      {
        path: 'deletecustomer', component: DeleteCustomerComponent
      },
      {
        path: 'deleteitem', component: DeleteItemComponent
      },
      {
        path: 'addstock', component: AddStockComponent
      },
      {
        path: 'purchasedetails', component: PurchaseDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AdminRoutingModule { }
