import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../service/shoppingcart.service';
import { Item } from '../model/Item';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems;

  constructor(private route: ActivatedRoute,
    private router: Router, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.executeShoppingCartService().subscribe((res) => {
      console.log(res);
      this.cartItems = res;
    });
  }

}
