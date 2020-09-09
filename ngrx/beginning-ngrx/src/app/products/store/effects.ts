import {Inject, Injectable} from '@angular/core';
import {Actions, ofType, Effect, createEffect} from '@ngrx/effects';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {concat, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {ProductActionTypes} from './actions';
import {concatMap, map, mergeMap, switchMap} from 'rxjs/operators';


@Injectable()
export class ProductEffect {

  // @Effect()
  // addProduct$ = createEffect(() => {
  //   this.actions$.pipe(
  //     ofType(ProductActionTypes.AddProduct),
  //     mergeMap((action)=> this.productService.addProduct(action.product))
  //   )
  // });

  constructor(private productService: ProductService, private actions$: Actions, private router: Router) {
  }
}
