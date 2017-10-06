import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  	selector: 'app-main-page',
  	templateUrl: './main-page.component.html',
  	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

	products: Product[];

	selectedHero: Product;

  	constructor(private productsService: ProductsService) { }

  	getProducts(): void {
	    this.productsService.getProducts().then(products => this.products = products)
	    .then(products => console.log('message', products));

	}

  	ngOnInit() {
  		this.getProducts()
  	}

  	onSelect(product: Product): void {
	    this.selectedHero = product;
	  }



}
