import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';

const routes: Routes = [
  {
   path : 'admin' ,
   component : AdminComponent,
   children: [
  { 
    path :'items' ,
    component : ItemListComponent  
  }
 ]
}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
