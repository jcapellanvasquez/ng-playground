import {Product} from '../../shared/product';
import {ProductActions, ProductActionTypes} from './actions';
import {act} from '@ngrx/effects';

export interface State {
  products: Product[];
}

export const initializeState: State = {
  products: []
};

export function reducer(state = initializeState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.AddProduct: {
      return {
        ...state
      };
    }
    case ProductActionTypes.AddProductSuccess: {
      return {
        ...state
      };
    }
    case ProductActionTypes.AddProductFailure: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }

}
