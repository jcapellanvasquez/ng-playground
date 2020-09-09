import {Injectable} from '@angular/core';
import {Product} from '../shared/product';

@Injectable()
export class ProductService {

  constructor() {
  }

  public addProduct(product: Product) {
    console.log(product)
  }
}
