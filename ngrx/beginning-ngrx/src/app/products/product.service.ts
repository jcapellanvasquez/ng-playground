import {Injectable} from '@angular/core';
import {Product} from '../shared/product';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable()
export class ProductService {
  private productsDB: AngularFireList<Product>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.setProducts([]);
    this.productsDB = this.db.list('/products', products => products.child("title"));
  }

  public addProduct(product: Product): Observable<Product[]> {
    let products = this.getProducts();
    products.push(product);
    this.setProducts(products);
    this.productsDB.push(product);
    return new Observable(subscriber => subscriber.next(products));
  }

  public getProducts(): Product[] {
    return <Product[]> JSON.parse(localStorage.getItem('products'));
  }

  public setProducts(products: Product[]) {
    if (!this.getProducts()) {
      localStorage.setItem('products', JSON.stringify(products));
    }

  }

  public getAll(): Observable<Product[]> {
    return new Observable(subscriber => subscriber.next(this.getProducts()));
  }
}
