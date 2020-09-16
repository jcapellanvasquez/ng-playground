import {State} from './reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const getFeatureState = createFeatureSelector<State>('Products');
export const getProducts = createSelector(getFeatureState, state => state.products);
export const getSelectedProduct = createSelector(getFeatureState, state => state.selectedProduct);
