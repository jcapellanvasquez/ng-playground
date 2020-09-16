import {Inject, Injectable} from '@angular/core';
import {Actions, ofType, Effect, createEffect} from '@ngrx/effects';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {concat, EMPTY, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  AddProductAction, AddProductActionFailure,
  AddProductActionSuccess,
  LoadProductsActionFailure,
  LoadProductsActionSuccess,
  ProductActionTypes,
  LoadProductAction,
  LoadProductActionFailure,
  ProductActions,
  LoadProductActionSuccess,
  LoadProductsAction
} from './actions';
import {catchError, concatMap, map, mergeMap, switchMap, take, takeUntil, tap} from 'rxjs/operators';


@Injectable()
export class ProductEffect {

  @Effect()
  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActionTypes.AddProduct),
      map((action: AddProductAction) => action.payload.product),
      switchMap(product => this.productService.addProduct(product).pipe(
        map(product => new AddProductActionSuccess({message: 'Product saved'})),
        catchError(error => of(new AddProductActionFailure({error: 'Failed saving the new product'})))
        )
      ),
    );
  }, {dispatch: false});

  @Effect()
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActionTypes.LoadProducts),
      switchMap(() => this.productService.getAll()
        .pipe(
          map(products => new LoadProductsActionSuccess({products: products})),
          catchError(() => of(new LoadProductsActionFailure({error: 'Failed to load products'})))
        )
      )
    );
  }, {dispatch: false});

  @Effect()
  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActionTypes.LoadProduct),
      map((action: LoadProductAction) => action.payload.key),
      switchMap(
        (key) => this.productService.getProduct(key).pipe(
          map(product => new LoadProductActionSuccess({product: product})),
          catchError(error => of(new LoadProductActionFailure({error: 'Failed to load the product'})))
        )
      )
    );
  }, {dispatch: false});

  constructor(private productService: ProductService, private actions$: Actions, private router: Router) {
  }
}
