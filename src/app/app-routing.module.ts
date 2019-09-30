import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { ShoppingCartSortedComponent } from './shoppingcartsorted/shoppingcartsorted.component';

const routes: Routes = [
  {path: '', component: ShoppingCartComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'cart/sort', component: ShoppingCartSortedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

