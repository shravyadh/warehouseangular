import { NgModule } from '@angular/core';
import { MerchantGuard } from 'src/app/guards/merchant.guard';
import { Routes, RouterModule } from '@angular/router';
import { MerchantComponent } from './merchant.component';
import { ErrorPageComponent } from '../error-page/error-page.component';


const routes: Routes = [
  {
    path: 'merchant', component: MerchantComponent, canActivate: [MerchantGuard],

  },
  {
    path: '**', component: ErrorPageComponent
  }
]
  
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
      providers: [MerchantGuard]
    })
export class MerchantRoutingModule { }
