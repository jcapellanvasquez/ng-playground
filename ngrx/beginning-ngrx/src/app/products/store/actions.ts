import {Action} from '@ngrx/store';
import {Product} from '../../shared/product';

export enum ProductActionTypes {
  AddProduct = '[Product] Add Product',
  AddProductSuccess = '[Product] Add Product Success',
  AddProductFailure = '[Product] Add Product Failure'
}

export class AddProductAction implements Action {
  readonly type = ProductActionTypes.AddProduct;

  constructor(public readonly payload: { product: Product }) {
  }
}

export class AddProductActionSuccess implements Action {
  readonly type = ProductActionTypes.AddProductSuccess;

  constructor(public readonly payload: { error: string }) {
  }
}

export class AddProductActionFailure implements Action {
  readonly type = ProductActionTypes.AddProductFailure;

  constructor(public readonly payload: { message: string }) {
  }
}

export type ProductActions = AddProductAction | AddProductActionFailure | AddProductActionSuccess;

