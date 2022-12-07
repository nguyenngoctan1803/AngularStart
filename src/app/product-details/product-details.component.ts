import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
      private route:ActivatedRoute,
      private cartService:CartService) {}
  product :   Product | undefined
  ngOnInit(): void {
    const id = this.route.snapshot.params['productId']
    // const productIdFromRoute =  Number(id.get('productId'));

    this.product = products.find(product=>product.id == id);
  }
  addToCart(product:Product)
  {
    this.cartService.addToCart(product);
    alert('The product has been added to your cart!')
  }
  // constructor(){}

}
