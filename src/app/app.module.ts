import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/loginservice/login.service';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemListComponent } from './components/item-components/item-list/item-list.component';
import { MerchantComponent } from './components/merchant/merchant.component';
import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { CustomerComponent } from './components/customer-components/customer/customer.component';
import { GetCustomerComponent } from './components/customer-components/get-customer/get-customer.component';
import { AddCustomerComponent } from './components/customer-components/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/customer-components/delete-customer/delete-customer.component';
import { DeleteItemComponent } from './components/item-components/delete-item/delete-item.component';
import { AddStockComponent } from './components/item-components/add-stock/add-stock.component';
import { PurchaseDetailsComponent } from './components/item-components/purchase-details/purchase-details.component';
import { MerchantRoutingModule } from './components/merchant/merchant-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ItemListComponent,
    MerchantComponent,
    CustomerComponent,
    GetCustomerComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    DeleteItemComponent,
    AddStockComponent,
    PurchaseDetailsComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MerchantRoutingModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
