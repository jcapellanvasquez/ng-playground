import {Inject, Injectable} from '@angular/core';
import {Actions, ofType, Effect} from '@ngrx/effects';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {concat, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {ProductActionTypes} from './actions';
import {concatMap, map, switchMap} from 'rxjs/operators';


@Injectable()
export class ProductEffect {

  @Effect()
  addProduct$: Observable<Action> = this.actions$
    .pipe(
      ofType(ProductActionTypes.AddProduct),
      map(action => action.payload.product),
      switchMap( product => this.productService.addProduct(product))
    );

  constructor(private productService: ProductService, private actions$: Actions, private router: Router) {
  }
}
