import {Inject, Injectable} from '@angular/core';
import {Actions, ofType, Effect, createEffect} from '@ngrx/effects';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {concat, EMPTY, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {AddProductActionSuccess, ProductActionTypes} from './actions';
import {catchError, concatMap, map, mergeMap, switchMap} from 'rxjs/operators';


@Injectable()
export class ProductEffect {

  @Effect()
  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActionTypes.AddProduct),
    mergeMap(
      ()=> this.productService.getAll().pipe(
        map(products => new AddProductActionSuccess({products: products})),
        catchError(()=> EMPTY)
      )
    )
  ));

  constructor(private productService: ProductService, private actions$: Actions, private router: Router) {
  }
}
