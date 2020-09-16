import {Product} from '../../shared/product';
import {LoadProductsActionSuccess, ProductActions, ProductActionTypes} from './actions';

export interface State {
  products: Product[];
  selectedProduct: Product
  error?: string,
  success?: string
}

export const initializeState: State = {
  products: [],
  selectedProduct: null
};

export function reducer(state = initializeState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.AddProductSuccess: {
      return {
        ...state,
        error: '',
        success: action.payload.message
      };
    }
    case ProductActionTypes.AddProductFailure: {
      return {
        ...state,
        error: action.payload.error
      };
    }
    case ProductActionTypes.LoadProducts: {
      return {
        ...state
      };
    }
    case ProductActionTypes.LoadProductsSuccess: {
      return {
        ...state,
        products: action.payload.products
      };
    }
    case ProductActionTypes.LoadProductSuccess: {
      return {
        ...state,
        selectedProduct: action.payload.product
      };
    }
    default: {
      return state;
    }
  }
}
