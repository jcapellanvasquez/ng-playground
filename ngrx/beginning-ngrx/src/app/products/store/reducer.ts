import {Product} from '../../shared/product';
import {ProductActions, ProductActionTypes} from './actions';

export interface State {
  products: Product[];
  prop?: string
}

export const initializeState: State = {
  products: []
};

export function reducer(state = initializeState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.AddProductSuccess: {
      return {
        products: action.payload.products
      };
    }
    case ProductActionTypes.AddProductFailure: {
      return {
        ...state
      };
    }
    case ProductActionTypes.LoadProducts: {
      return {
        ...state
      }
    }
    case ProductActionTypes.LoadProductsSuccess: {
      return {
        products: action.payload.products
      }
    }
    default: {
      return state;
    }
  }

}
