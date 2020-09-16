import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {AddProductAction, LoadProductAction} from '../store/actions';
import {Product} from '../../shared/product';
import {ProductService} from '../product.service';
import {Observable, Subscription} from 'rxjs';
import {getProducts, getSelectedProduct} from '../store/selectors';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: []
})
export class ProductFormComponent implements OnInit, OnDestroy {

  private _form: FormGroup;
  private subscription: Subscription;
  private product$: Observable<Product>;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public store: Store<State>,
    private activeRoute: ActivatedRoute,
  ) {

    this._form = this.fb.group({
      key: [''],
      title: ['', [Validators.required]],
      description: [''],
      quantity: ['', [Validators.required]],
      status: [false],
    });
  }

  ngOnInit(): void {

    this.subscription = this.activeRoute.paramMap.subscribe(params => {
      this.store.dispatch(new LoadProductAction({key: params.get('key')}));
      this.product$ = this.store.select(getSelectedProduct);
      this.product$.subscribe(product => {
        this.form.patchValue({...product});
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public save() {
    this.store.dispatch(new AddProductAction({product: {...this.form.value}}));
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }
}
