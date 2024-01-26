import { Component } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    let response = this.productService.getProducts();
    response.subscribe(data => {
      console.log('console came here');
      console.log(data);
      this.products = data;
    });
    // let prod: Product = new Product(1, "Wall Art", "Beautiful Wall Art", "$10", "100");
    // let prod2: Product = new Product(1, "Kitchen Art", "Beautiful Wall Art", "$10", "100");
    // let prod3: Product = new Product(1, "Bedroom Art", "Beautiful Wall Art", "$10", "100");
    // let prod4: Product = new Product(1, "Tv Art", "Beautiful Wall Art", "$10", "100");
    // this.products = [prod, prod2, prod3, prod4];
  }
}
