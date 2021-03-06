import {Action, createAction, props} from '@ngrx/store';
import {Product} from '../../shared/product';

export enum ProductActionTypes {
  AddProduct = '[Product] Add Product',
  AddProductSuccess = '[Product] Add Product Success',
  AddProductFailure = '[Product] Add Product Failure',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  UpdateProductFailure = '[Product] Update Product Failure',
  LoadProducts = '[Product] Load Products',
  LoadProductsSuccess = '[Product] Load Products Success',
  LoadProductsFailure = '[Product] Load Products Failure',
  LoadProduct = '[Product] Load Product',
  LoadProductSuccess = '[Product] Load Product Success',
  LoadProductFailure = '[Product] Load Product Failure'
}


export class AddProductAction implements Action {
  readonly type = ProductActionTypes.AddProduct;

  constructor(public readonly payload: { [product: string]: Product }) {
  }
}

export class AddProductActionSuccess implements Action {
  readonly type = ProductActionTypes.AddProductSuccess;

  constructor(public readonly payload: { message: string }) {
  }
}

export class AddProductActionFailure implements Action {
  readonly type = ProductActionTypes.AddProductFailure;

  constructor(public readonly payload: { error: string }) {
  }
}

export class UpdateProductAction implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public readonly payload: { [product: string]: Product }) {
  }
}

export class UpdateProductActionSuccess implements Action {
  readonly type = ProductActionTypes.UpdateProductSuccess;

  constructor(public readonly payload: { message: string }) {
  }
}

export class UpdateProductActionFailure implements Action {
  readonly type = ProductActionTypes.UpdateProductFailure;

  constructor(public readonly payload: { error: string }) {
  }
}

export class LoadProductsAction implements Action {
  readonly type = ProductActionTypes.LoadProducts;

  constructor() {
  }
}

export class LoadProductsActionFailure implements Action {
  readonly type = ProductActionTypes.LoadProductsFailure;

  constructor(public readonly payload: { error: string }) {
  }
}

export class LoadProductsActionSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductsSuccess;

  constructor(public readonly payload: { products: Product[] }) {
  }
}

export class LoadProductAction implements Action {
  readonly type = ProductActionTypes.LoadProduct;

  constructor(public readonly payload: { key: string }) {
  }
}

export class LoadProductActionFailure implements Action {
  readonly type = ProductActionTypes.LoadProductFailure;

  constructor(public readonly payload: { error: string }) {
  }
}

export class LoadProductActionSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductSuccess;

  constructor(public readonly payload: { product: Product }) {
  }
}


export type ProductActions =
  AddProductAction
  | AddProductActionFailure
  | AddProductActionSuccess
  | LoadProductsAction
  | LoadProductsActionFailure
  | LoadProductsActionSuccess
  | LoadProductAction
  | LoadProductActionFailure
  | LoadProductActionSuccess;

