import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {Observable} from 'rxjs';
import {getProducts} from '../store/selectors';
import {LoadProductsAction} from "../store/actions";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  public products$: Observable<any>;
  public status: any;

  constructor(
    public router: Router,
    public store: Store<State>
  ) {

  }

  ngOnInit(): void {
    this.store.dispatch(new LoadProductsAction());
    this.products$ = this.store.select(getProducts);
  }

}
