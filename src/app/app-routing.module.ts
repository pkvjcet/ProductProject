import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [{path:'',component:ProductlistComponent},
{path:'add',component:AddComponent},
{path:'logout',component:ProductlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
