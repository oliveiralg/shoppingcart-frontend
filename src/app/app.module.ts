import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartService } from './service/shoppingcart.service';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { ShoppingCartSortedComponent } from './shoppingcartsorted/shoppingcartsorted.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartSortedComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
