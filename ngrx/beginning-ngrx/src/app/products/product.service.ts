import {Injectable} from '@angular/core';
import {Product} from '../shared/product';
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

  constructor() {
  }

  public addProduct(product: Product): Observable<any> {
    console.log(product);
    return new Observable<any>();
  }
}
