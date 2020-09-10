import {Product} from '../../shared/product';
import {ProductActions, ProductActionTypes} from './actions';

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
        ...action.payload
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
