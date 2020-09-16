import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {AddProductAction, LoadProductAction, UpdateProductAction} from '../store/actions';
import {Product} from '../../shared/product';
import {Observable, Subscription} from 'rxjs';
import {getSelectedProduct} from '../store/selectors';
import {takeUntil, takeWhile} from 'rxjs/operators';

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

    });

    this.product$.subscribe(product => {
      if (product) {
        this.form.patchValue({key: product.key, ...product});
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public save() {
    if (this.form.get('key')) {
      this.store.dispatch(new UpdateProductAction({product: {...this.form.value}}));
    } else {
      this.store.dispatch(new AddProductAction({product: {...this.form.value}}));
    }
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }
}
