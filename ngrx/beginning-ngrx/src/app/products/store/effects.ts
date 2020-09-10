import {Inject, Injectable} from '@angular/core';
import {Actions, ofType, Effect, createEffect} from '@ngrx/effects';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {concat, EMPTY, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {AddProductAction, AddProductActionSuccess, ProductActionTypes} from './actions';
import {catchError, concatMap, map, mergeMap, switchMap} from 'rxjs/operators';


@Injectable()
export class ProductEffect {

  @Effect()
  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActionTypes.AddProduct),
      map((action: AddProductAction) => action.payload.product),
      switchMap(product => this.productService.addProduct(product)),
      map(products => new AddProductActionSuccess({products: products}))
    );
  }, {dispatch: false});


  constructor(private productService: ProductService, private actions$: Actions, private router: Router) {
  }
}
