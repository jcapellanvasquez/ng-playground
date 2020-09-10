import {Injectable} from '@angular/core';
import {Product} from '../shared/product';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  constructor() {
    this.setProducts([]);
  }

  public addProduct(product: Product): Observable<Product[]> {
    let products = this.getProducts();
    products.push(product);
    this.setProducts(products);
    return new Observable(subscriber => subscriber.next(products));
  }

  public getProducts(): Product[] {
    return <Product[]> JSON.parse(localStorage.getItem('products'));
  }

  public setProducts(pproducts: Product[]) {
    localStorage.setItem('products', JSON.stringify(pproducts));
  }

  public getAll(): Observable<Product[]> {
    return new Observable(subscriber => subscriber.next(this.getProducts()))
  }
}
