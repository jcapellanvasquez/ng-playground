import {Injectable} from '@angular/core';
import {Product} from '../shared/product';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map, take} from 'rxjs/operators';

@Injectable()
export class ProductService {
  private productsDB: AngularFireList<Product>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.setProducts([]);
    this.productsDB = this.db.list('/products', products => products.child('title'));
  }

  public addProduct(product: Product): Observable<Product> {
    this.productsDB.push(product);
    return new Observable(subscriber => subscriber.next(product));
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
    return this.productsDB.snapshotChanges().pipe(
      map(changes => changes.map(product => ({$key: product.key, ...product.payload.val()})))
    );
  }

  public getProduct(key: string): Observable<Product> {
    return this.getAll().pipe(map(products => products.find(p => p.$key===key)));
  }
}
