import 'rxjs/add/operator/switchMap'
import { Component, OnInit }        from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location }                 from '@angular/common';

import { Product } from '../product';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

	product: Product;

	mainImageUrl: string;

  	constructor(
	    private productsService: ProductsService,
	    private route: ActivatedRoute,
	    private location: Location
	  ) {}

  	ngOnInit(): void {
	    this.route.paramMap
	      	.switchMap((params: ParamMap) => this.productsService.getSingleProduct(params.get('id')))
	      	.subscribe(product => this.product = product);

	}





	setImg(imgUrl): void {

		this.mainImageUrl = imgUrl;

		console.log('obj111', imgUrl);

		console.log('obj222', this.product);

	}



}