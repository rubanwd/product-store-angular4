import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getSingleProduct(id: string): Promise<Product> {
    return this.getProducts()
               .then(products => products.find(product => product._id === id));
  }
  
}
