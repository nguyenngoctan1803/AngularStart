import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../products';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  items:Product[] = [];
  constructor(
    private cartService:CartService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
