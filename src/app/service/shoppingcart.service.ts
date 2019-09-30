import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) {
  }
  
  executeShoppingCartService() {
    return this.http.get('http://localhost:8080/api/cart');
  }
  
  sortShoppingCartService() {
    return this.http.get('http://localhost:8080/api/cart/sort');
  }
}
