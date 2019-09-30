import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../service/shoppingcart.service';
import { Item } from '../model/Item';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcartsorted.component.html',
  styleUrls: ['./shoppingcartsorted.component.css']
})
export class ShoppingCartSortedComponent implements OnInit {

  cartItems;
  total;

  constructor(private route: ActivatedRoute,
    private router: Router, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.sortShoppingCartService().subscribe((res) => {
      console.log(res);
      this.cartItems = res;
     
      let sum = 0;
      for(let i = 0; i < this.cartItems.length; i++) {
      console.log(this.cartItems[i].price);
        sum += this.cartItems[i].price;
      }
      this.total = sum;;
    });
  }
}
