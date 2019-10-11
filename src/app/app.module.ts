import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { ItemListComponent } from '../app/components/item-list/item-list.component';
import { MerchantComponent } from './components/merchant/merchant.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ItemListComponent,
    MerchantComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
